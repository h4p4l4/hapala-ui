import { Button, ChakraProvider, Flex, Icon } from "@chakra-ui/react"
import { Accept, useDropzone } from "react-dropzone"
import { DownloadIcon } from "@chakra-ui/icons"

interface Props {
  onDrop: (photos: File[]) => void
  width?: number
}

export const Dropzone = (props: Props) => {
  const { onDrop, width } = props

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*" as unknown as Accept,
    onDrop,
  })

  return (
    <ChakraProvider>
      <Flex
        {...getRootProps({ className: "dropzone" })}
        w={width | 500}
        height="100"
        borderWidth="2px"
        borderColor="blackAlpha.200"
        bg="blackAlpha.200"
        borderStyle="dashed"
        borderRadius="lg"
        marginBottom="15px"
        px={4}
        py={2}
        cursor="pointer"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Icon
          as={DownloadIcon}
          width="100%"
          boxSize={9}
          color="blackAlpha.600"
        />
        <input
          {...getInputProps()}
          style={{ display: "none", cursor: "pointer" }}
        />
        <Button
          bg="blackAlpha.300"
          _hover={{ bg: "blackAlpha.400" }}
          size="sm"
          textAlign="center"
        >
          Вибрати файли
        </Button>
      </Flex>
    </ChakraProvider>
  )
}
