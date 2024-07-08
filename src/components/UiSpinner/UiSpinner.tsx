import { Spinner } from "@chakra-ui/react"
import { ChakraSize } from "../../types/common"

export function UiSpinner({ size = "xl" }: { size?: ChakraSize }) {
  return (
    <Spinner thickness="4px" speed="0.65s" color="yellow.500" size={size} />
  )
}
