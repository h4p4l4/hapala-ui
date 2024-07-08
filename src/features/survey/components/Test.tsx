import React, { useEffect, useState } from "react"
import { Option, TestResult } from "../models/SurveyModels"
import { Box, ChakraProvider, Heading, Text } from "@chakra-ui/react"
import { QuestionFactory } from "../../../shared/components/QuestionFactory"

interface TestProps {
  test: {
    _id: string
    name: string
    description: string
    questionsIdList: Option[]
  }
  onAnswerChange: (questionId: string, value: string) => void
  results?: TestResult
  isSubmitted: boolean
  timeLimit?: number
  handleSubmit?: () => void
}

export const Test: React.FC<TestProps> = ({
  isSubmitted,
  test,
  onAnswerChange,
  results,
  timeLimit,
  handleSubmit,
}: TestProps) => {
  const [timer, setTimer] = useState<number | undefined>(undefined)

  useEffect(() => {
    const savedTimer = localStorage.getItem(`timer-${test._id}`)
    if (savedTimer) {
      setTimer(parseInt(savedTimer, 10))
    } else if (timeLimit) {
      setTimer(timeLimit * 60)
    }
  }, [test._id, timeLimit])

  useEffect(() => {
    if (timeLimit === undefined) {
      return
    }
    const interval = setInterval(() => {
      setTimer((currentTimer) => {
        if (currentTimer === 0) {
          clearInterval(interval)
          localStorage.removeItem(`timer-${test._id}`)
          if (handleSubmit) handleSubmit()
          return 0
        }
        localStorage.setItem(`timer-${test._id}`, (currentTimer - 1).toString())
        return currentTimer - 1
      })
    }, 1000)

    return () => {
      clearInterval(interval)
      if (timer) {
        localStorage.setItem(`timer-${test._id}`, timer.toString())
      }
    }
  }, [test._id, timer, handleSubmit])

  const formatTime = () => {
    if (timer !== undefined) {
      const minutes = Math.floor(timer / 60)
      const seconds = timer % 60
      return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }
    return ""
  }

  return (
    <ChakraProvider resetCSS>
      {timeLimit && (
        <Box
          w="80px"
          h="80px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="50%"
          backgroundColor="white"
          fontWeight={700}
          fontSize="2xl"
          position="fixed"
          right={10}
          bottom={10}
          boxShadow="2xl"
          zIndex={10}
        >
          {formatTime()}
        </Box>
      )}
      <Box w="100%">
        <Heading size="xl" mb={3}>
          {test.name}
        </Heading>
        <Text mb={5} style={{ color: "#718096" }}>
          {test.description}
        </Text>

        {test.questionsIdList.map((question) => {
          const QuestionComponent = QuestionFactory("standardAbc")
          return (
            <QuestionComponent
              key={question._id}
              isSubmitted={isSubmitted}
              question={question}
              onChangeAnswer={(questionId, value) =>
                onAnswerChange(questionId, value)
              }
              result={results?.questionsResults.find(
                (qr) => qr.questionId === question._id,
              )}
            />
          )
        })}
      </Box>
    </ChakraProvider>
  )
}
