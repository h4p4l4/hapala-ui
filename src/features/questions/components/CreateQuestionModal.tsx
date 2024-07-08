import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { CustomModal } from "../../../components/CustomModal/CustomModal"
import { AppInput } from "../../../components/AppInput/AppInput"
import { SubmitButton } from "../../../components/SubmitButton/SubmitButton"
import { AddIcon, CheckIcon } from "@chakra-ui/icons"
import { Button, Flex, IconButton, Text } from "@chakra-ui/react"
import { QuestionsConstants } from "../utils/QuestionUtils"
import { ModalProps } from "../../../types/interfaces"

const questionForm = QuestionsConstants.questionForm
const questionInput = QuestionsConstants.questionForm.questionInput
const optionInput = QuestionsConstants.questionForm.optionInput

export const CreateQuestionModal = (props: ModalProps) => {
  const [questionOptions, setQuestionOptions] = useState<string[]>([])
  const [correctAnswer, setCorrectAnswer] = useState<string[]>([])

  const { isOpen, onClose, onFormSubmit } = props

  const {
    control,
    watch,
    setValue,
    handleSubmit: useFormSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const optionInputValue = watch(optionInput.name)

  const handleAddOption = () => {
    if (optionInputValue && optionInputValue.trim() !== "") {
      setQuestionOptions((prevOptions) => [...prevOptions, optionInputValue])
      setValue(optionInput.name, "")
    }
  }

  const handleCorrectAnswer = (option: string) => {
    setCorrectAnswer([option])
  }

  const createQuestion = (data) => {
    onFormSubmit({
      text: data.questionTitle,
      options: questionOptions,
      correctAnswer,
    })
  }

  const renderQuestionOptions = () => (
    <>
      {questionOptions.map((option) => {
        return (
          <Flex
            justify="space-between"
            align="center"
            key={option}
            marginBottom="10px"
          >
            <Text>{option}</Text>
            {correctAnswer[0] === option ? (
              <CheckIcon color="green.500" height="32px" />
            ) : (
              <Button size="sm" onClick={() => handleCorrectAnswer(option)}>
                Правильна вiдповiдь
              </Button>
            )}
          </Flex>
        )
      })}
    </>
  )

  return (
    <CustomModal
      isOpen={isOpen}
      size="xl"
      title={questionForm.createTitle}
      onClose={onClose}
    >
      <form onSubmit={useFormSubmit(createQuestion)}>
        <AppInput
          control={control}
          name={questionInput.name}
          errors={errors}
          placeholder={questionInput.placeholder}
          label={questionInput.label}
          rules={questionInput.rules}
        />

        {renderQuestionOptions()}

        <Flex
          gap="20px"
          alignItems="end"
          justifyContent="center"
          marginBottom="16px"
        >
          <AppInput
            control={control}
            name={optionInput.name}
            errors={errors}
            placeholder={optionInput.placeholder}
            label={optionInput.label}
          />

          <IconButton
            aria-label="Check item"
            icon={<AddIcon w={6} h={6} />}
            onClick={handleAddOption}
            marginBottom="8px"
          />
        </Flex>

        <SubmitButton
          submitTitle={questionForm.createButtonText}
          isSubmitting={isSubmitting}
        />
      </form>
    </CustomModal>
  )
}
