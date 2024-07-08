import React, { useState } from "react"
import { Box, Text, VStack, Radio } from "@chakra-ui/react"
import { QuestionComponentType } from "../../../shared/components/QuestionFactory"

export const StandardAbcQuestion: QuestionComponentType = ({
  question,
  onChangeAnswer,
  result,
  isSubmitted,
}) => {
  const [selectedOption, setSelectedOption] = useState("")

  const handleOptionChange = (option: string) => {
    if (!isSubmitted) {
      setSelectedOption(option)
      onChangeAnswer(question._id, option)
    }
  }

  const getOptionBgColor = (option: string) => {
    if (result) {
      if (result.correctAnswer.includes(option) && result.isCorrect) {
        return "green.100"
      } else if (result.userAnswer.includes(option) && !result.isCorrect) {
        return "red.100"
      }
    }
    return selectedOption === option ? "yellow.100" : "transparent"
  }

  const hoverStyle = isSubmitted
    ? {}
    : { boxShadow: "0 0 2px rgba(0, 0, 0, 0.2)" }

  return (
    <Box
      w="100%"
      shadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      mb={5}
    >
      <Text mb={2}>{question.text}</Text>
      <VStack align="start">
        {question.options.map((option, index) => (
          <Box
            w={"100%"}
            key={index}
            onClick={() => handleOptionChange(option)}
            cursor={isSubmitted ? "default" : "pointer"}
            bg={getOptionBgColor(option)}
            p={2}
            borderRadius="md"
            _hover={hoverStyle}
          >
            <Radio
              value={option}
              colorScheme="yellow"
              borderColor={"gray.300"}
              size="lg"
              isChecked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              pointerEvents="none"
            >
              {option}
            </Radio>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}
