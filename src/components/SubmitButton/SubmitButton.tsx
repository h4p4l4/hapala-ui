import { Button, ChakraProvider } from "@chakra-ui/react"

interface Props {
  submitTitle: string
  isSubmitting?: boolean
  marginTop?: string
  onClick?: () => void
}

export const SubmitButton = (props: Props) => {
  const { isSubmitting = false, submitTitle, marginTop, onClick } = props

  return (
    <ChakraProvider resetCSS>
      <Button
        isLoading={isSubmitting}
        type="submit"
        colorScheme="yellow"
        width="100%"
        mt={marginTop}
        onClick={onClick}
      >
        {submitTitle}
      </Button>
    </ChakraProvider>
  )
}
