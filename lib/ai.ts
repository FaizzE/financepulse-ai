import { GoogleGenAI, Type } from '@google/genai'

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
})

export interface ExpenseRecord {
  id: string
  amount: number
  category: string
  description: string
  date: string
}

export interface RawInsight {
  type?: string
  title?: string
  message?: string
  action?: string
  confidence?: number
}

export interface AIInsight {
  id: string
  type: 'warning' | 'info' | 'success' | 'tip'
  title: string
  message: string
  action?: string
  confidence: number
}

export async function generateExpenseInsights (
  expenses: ExpenseRecord[]
): Promise<AIInsight[]> {
  try {
    const expensesSummary = expenses.map(expense => ({
      amount: expense.amount,
      category: expense.category,
      description: expense.description,
      date: expense.date
    }))

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `Analyze this expense data and provide 3-4 actionable financial insights:
      ${JSON.stringify(expensesSummary, null, 2)}`,
      config: {
        systemInstruction:
          'You are a financial advisor AI analyzing spending patterns. Provide actionable insights on patterns, budget alerts, and savings opportunities.',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              type: {
                type: Type.STRING,
                description: 'Must be one of: warning, info, success, tip'
              },
              title: { type: Type.STRING },
              message: { type: Type.STRING },
              action: { type: Type.STRING },
              confidence: { type: Type.NUMBER }
            },
            required: ['type', 'title', 'message', 'action', 'confidence']
          }
        }
      }
    })

    const insights = JSON.parse(response.text || '[]')

    return insights.map((insight: RawInsight, index: number) => ({
      id: `ai-${Date.now()}-${index}`,
      type: (insight.type as AIInsight['type']) || 'info',
      title: insight.title || 'AI Insight',
      message: insight.message || 'Analysis complete',
      action: insight.action,
      confidence: insight.confidence || 0.8
    }))
  } catch (error) {
    console.error('❌ Error generating AI insights:', error)
    return [
      {
        id: 'fallback-1',
        type: 'info',
        title: 'AI Analysis Unavailable',
        message:
          'Unable to generate personalized insights at this time. Please try again later.',
        action: 'Refresh insights',
        confidence: 0.5
      }
    ]
  }
}

export async function categorizeExpense (description: string): Promise<string> {
  const validCategories = [
    'Food',
    'Transportation',
    'Entertainment',
    'Shopping',
    'Bills',
    'Healthcare',
    'Other'
  ]

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `Categorize this expense: "${description}"`,
      config: {
        systemInstruction:
          'You are an expense categorization assistant. Categorize the given description into EXACTLY one of the allowed categories. Output only the category.',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.STRING,
          enum: validCategories
        }
      }
    })

    const parsedCategory = JSON.parse(response.text || '""')
    if (validCategories.includes(parsedCategory)) {
      return parsedCategory
    }
  } catch (err) {
    console.error('❌ categorizeExpense AI error, checking keyword map:', err)
  }

  // Built-in fallback dictionary if API call fails
  const cleaned = description.toLowerCase()
  const map: Record<string, string> = {
    coffee: 'Food',
    drink: 'Food',
    restaurant: 'Food',
    meal: 'Food',
    grocery: 'Food',
    petrol: 'Transportation',
    diesel: 'Transportation',
    fuel: 'Transportation',
    cab: 'Transportation',
    uber: 'Transportation',
    taxi: 'Transportation',
    movie: 'Entertainment',
    cinema: 'Entertainment',
    netflix: 'Entertainment',
    shopping: 'Shopping',
    clothes: 'Shopping',
    electricity: 'Bills',
    rent: 'Bills',
    wifi: 'Bills',
    internet: 'Bills',
    doctor: 'Healthcare',
    hospital: 'Healthcare',
    medicine: 'Healthcare',
    pharmacy: 'Healthcare'
  }

  for (const key in map) {
    if (cleaned.includes(key)) return map[key]
  }

  return 'Other'
}

export async function generateAIAnswer (
  question: string,
  context: ExpenseRecord[]
): Promise<string> {
  try {
    const expensesSummary = context.map(expense => ({
      amount: expense.amount,
      category: expense.category,
      description: expense.description,
      date: expense.date
    }))

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `Question: "${question}"\n\nExpense Data:\n${JSON.stringify(
        expensesSummary,
        null,
        2
      )}`,
      config: {
        systemInstruction:
          'You are a financial advisor AI. Address the question directly in 2-3 concise sentences using exact numbers from the data when possible. Do not output markdown code blocks.'
      }
    })

    return (
      response.text?.trim() ||
      "I'm unable to provide a detailed answer at the moment."
    )
  } catch (error) {
    console.error('❌ Error generating AI answer:', error)
    return "I'm unable to provide a detailed answer at the moment. Please try refreshing the insights or check your connection."
  }
}
