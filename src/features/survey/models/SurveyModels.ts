export interface Option {
  _id: string
  text: string
  options: string[]
  categoryId: string
  correctAnswer?: string[]
  createdAt: string
  updatedAt: string
  __v: number
}

export interface QuestionResult {
  questionId: string
  userAnswer: string[]
  correctAnswer: string[]
  isCorrect: boolean
}

export interface TestResult {
  testId: string
  testName: string
  correctAnswers: number
  totalQuestions: number
  questionsResults: QuestionResult[]
}

export interface SurveyData {
  _id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
  __v: number
  testIdList: Array<{
    _id: string
    name: string
    description: string
    categoryIdList: string[]
    questionsIdList: Option[]
    createdAt: string
    updatedAt: string
    __v: number
  }>
}
