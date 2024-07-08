import { StandardAbcQuestion } from "../../features/questions/components/StandardAbcQuestion"
import {
  Option,
  QuestionResult,
} from "../../features/survey/models/SurveyModels"
import CustomQuestion from "../../features/questions/components/CustomQuestion"

interface QuestionComponentProps {
  question: Option
  onChangeAnswer: (questionId: string, value: string) => void
  result?: QuestionResult
  isSubmitted: boolean
}

export type QuestionComponentType = (
  props: QuestionComponentProps,
) => JSX.Element

export const QuestionFactory = (
  questionType: string,
): QuestionComponentType => {
  switch (questionType) {
    case "standardAbc":
      return StandardAbcQuestion
    case "custom":
      return CustomQuestion
    default:
      throw new Error("Unknown question type")
  }
}
