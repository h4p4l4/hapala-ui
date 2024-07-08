import { Box, IconButton, Image } from "@chakra-ui/react"
import { FileOpener } from "../FileOpener/FileOpener"
import { CloseIcon } from "@chakra-ui/icons"
import { imageHoverButtonStyle } from "../../styles/common"

interface Props {
  file?: File
  fileUrl?: string
  handleClick?: Function
  handleRemove?: Function
}

export const File = (props: Props) => {
  const { file, fileUrl, handleClick = () => {}, handleRemove } = props

  if (file || fileUrl)
    return (
      <Box
        position="relative"
        display="inline-block"
        m={2}
        _hover={imageHoverButtonStyle}
        onClick={() => handleClick(file || fileUrl)}
      >
        {file &&
          (file.type.includes("image") ? (
            <Image src={URL.createObjectURL(file)} alt="" maxWidth="200px" />
          ) : (
            <FileOpener file={file} />
          ))}

        {fileUrl && <Image src={fileUrl} alt="" maxWidth="200px" />}

        {handleRemove && (
          <IconButton
            icon={<CloseIcon />}
            colorScheme="red"
            size="xs"
            position="absolute"
            top="2"
            right="2"
            onClick={(e) => {
              e.stopPropagation()
              handleRemove(file || fileUrl)
            }}
            display="none"
            aria-label=""
          />
        )}
      </Box>
    )
}
