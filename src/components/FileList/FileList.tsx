import {
  Card,
  CardBody,
  CardHeader,
  ChakraProvider,
  Heading,
  useDisclosure,
} from "@chakra-ui/react"
import { useState } from "react"
import { PhotoViewer } from "../PhotoViewer/PhotoViewer"
import { File } from "../File/File"

interface Props {
  files?: File[]
  fileLinks?: string[]
  removePhoto?: Function
}

export const FileList = (props: Props) => {
  const { files, fileLinks, removePhoto = null } = props

  const [viewingPhoto, setViewingPhoto] = useState<File | null>(null)
  const [viewingPhotoUrl, setViewingPhotoUrl] = useState<string | null>(null)

  const { onOpen, isOpen, onClose } = useDisclosure()

  const handleOpenImage = (image: File) => {
    setViewingPhoto(image)

    onOpen()
  }

  const handleOpenImageUrl = (imageUrl: string) => {
    setViewingPhotoUrl(imageUrl)

    onOpen()
  }

  const handleClickOnFile = (file: File | string) => {
    if (typeof file === "string") {
      handleOpenImageUrl(file)
    } else if (file.type.includes("image")) {
      handleOpenImage(file)
    }
  }

  return (
    <ChakraProvider>
      <Card>
        <CardHeader>
          <Heading size="md">Завантаженi фото:</Heading>{" "}
        </CardHeader>

        <CardBody display="flex">
          {files &&
            files.map((file: File, index) => (
              <File
                file={file}
                key={index}
                handleClick={handleClickOnFile}
                handleRemove={removePhoto}
              />
            ))}

          {fileLinks &&
            fileLinks.map((fileLink, index) => (
              <File
                fileUrl={fileLink}
                key={index}
                handleClick={handleClickOnFile}
                handleRemove={removePhoto}
              />
            ))}
        </CardBody>
      </Card>

      {viewingPhoto && (
        <PhotoViewer photo={viewingPhoto} isOpen={isOpen} onClose={onClose} />
      )}

      {viewingPhotoUrl && (
        <PhotoViewer
          isOpen={isOpen}
          onClose={onClose}
          photoUrl={viewingPhotoUrl}
        />
      )}
    </ChakraProvider>
  )
}
