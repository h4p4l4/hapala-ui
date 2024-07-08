import { Box, Flex, Link, Text } from "@chakra-ui/react"
import { QuestionIcon } from "@chakra-ui/icons"

interface Props {
  file: File
}

export const FileOpener = (props: Props) => {
  const { file } = props

  return (
    <Link href={URL.createObjectURL(file)} isExternal>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
        bg="gray.300"
        w={200}
        h={300}
      >
        <QuestionIcon w={8} h={8} />
        <Text>{file.name}</Text>
      </Flex>
    </Link>
  )
}
