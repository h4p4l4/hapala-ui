import {
  ChakraProvider,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useOutsideClick,
} from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"
import React from "react"

interface Props {
  photo?: File
  photoUrl?: string
  isOpen: boolean
  onClose: () => void
}

export const PhotoViewer = (props: Props) => {
  const { photo, photoUrl, isOpen, onClose } = props

  const ref = React.useRef<HTMLDivElement>(null)

  useOutsideClick({
    ref,
    handler: () => onClose(),
  })

  if (photo || photoUrl)
    return (
      <ChakraProvider>
        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay />
          <ModalContent
            bg="transparent"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton
              icon={<CloseIcon />}
              position="fixed"
              top="2"
              right="2"
              onClick={onClose}
              aria-label=""
            />

            <ModalBody
              display="flex"
              justifyContent="center"
              alignItems="center"
              ref={ref}
            >
              <Image
                src={photoUrl || URL.createObjectURL(photo)}
                alt="Description"
                objectFit="contain"
                maxHeight="100vh"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    )
}
