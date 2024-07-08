import React from "react"
import { Flex, Box, keyframes } from "@chakra-ui/react"

// Анімація для "біжучих" крапок
const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1.0); }
`

const Dot = () => (
  <Box
    as="span"
    mx="2px"
    h="8px"
    w="8px"
    bg="yellow.500"
    borderRadius="full"
    display="inline-block"
    animation={`${bounce} 1.4s infinite ease-in-out both`}
  />
)

const LoadingDots: React.FC = () => {
  return (
    <Flex justify="center" align="center">
      <Dot />
      <Dot />
      <Dot />
    </Flex>
  )
}

export default LoadingDots
