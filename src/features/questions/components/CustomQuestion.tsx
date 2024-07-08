import React from "react"
import { QuestionComponentType } from "../../../shared/components/QuestionFactory"

const CustomQuestion: QuestionComponentType = ({
  question,
  onChangeAnswer,
  result,
  isSubmitted,
}) => {
  return <div>Custom Question component</div>
}

export default CustomQuestion
