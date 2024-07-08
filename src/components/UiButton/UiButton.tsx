import { Button, ChakraProvider, ButtonProps } from "@chakra-ui/react"
import { ButtonHTMLAttributes, ReactNode } from "react"

type UiButtonProps = {
  children: ReactNode | string
} & ButtonProps

export function UiButton({ children, ...props }: UiButtonProps) {
  return (
    <ChakraProvider>
      <Button {...props} size="sm">
        {children}
      </Button>
    </ChakraProvider>
  )
}
