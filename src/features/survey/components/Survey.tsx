import React, { useState } from "react"

import axios from "axios"
import {
  Button,
  ChakraProvider,
  Flex,
  Heading,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { SurveyData, TestResult } from "../models/SurveyModels"
import {Test} from "./Test"

interface SurveyProps {
  surveyData: SurveyData
}

export const Survey: React.FC<SurveyProps> = ({ surveyData }) => {
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [surveyResults, setSurveyResults] = useState<TestResult[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const toast = useToast()

  const isEveryQuestionAnswered = surveyData.testIdList.every((test) =>
    test.questionsIdList.every((question) => answers[question._id]),
  )

  const handleAnswerChange = (
    // testId: string,
    questionId: string,
    answer: string,
  ) => {
    if (!isSubmitted) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionId]: [answer],
      }))
    }
  }

  const handleSubmitSurvey = async () => {
    if (!isEveryQuestionAnswered) {
      toast({
        title: "Не всі питання відповідені",
        description: "Будь ласка, відповідьте на всі питання перед відправкою.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      })
      return
    }

    setIsSubmitted(true)

    try {
      const response = await axios.post(
        "http://localhost:3000/surveys/submit",
        {
          surveyId: surveyData._id,
          answers,
        },
      )

      setSurveyResults(response.data.testResults)

      toast({
        title: "Опитування завершено",
        description: "Відповіді успішно надіслано.",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
    } catch (error) {
      setIsSubmitted(false)
      toast({
        title: "Помилка відправлення",
        description: "Не вдалося відправити відповіді.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <ChakraProvider resetCSS>
      <Flex direction="column" w="100%" p={5} alignItems="flex-start">
        <Heading size="lg" mb={5}>
          {surveyData.name}
        </Heading>
        <VStack spacing={8} w="100%">
          {surveyData.testIdList.map((test) => (
            <Test
              key={test._id}
              test={test}
              onAnswerChange={handleAnswerChange}
              results={surveyResults.find(
                (result) => result.testId === test._id,
              )}
              isSubmitted={isSubmitted}
            />
          ))}
        </VStack>
        <Button
          colorScheme="yellow"
          mt={4}
          alignSelf="center"
          onClick={handleSubmitSurvey}
          isDisabled={isSubmitted}
        >
          Здати опитування
        </Button>
      </Flex>
    </ChakraProvider>
  )
}
