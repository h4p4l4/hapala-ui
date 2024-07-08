import React, { ReactNode } from "react"
import {
  Box,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import { ChakraSize } from "../../types/common"

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  size?: ChakraSize
}

export const CustomModal = (props: CustomModalProps) => {
  const { isOpen, children, onClose, title, size } = props

  // return <div>123</div>

  return (
    <ChakraProvider>
      <Modal
        size={size}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="scale"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <Box
            zIndex="docked"
            boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
          >
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton position="absolute" right="8px" top="8px" />
          </Box>
          <ModalBody style={{ padding: "24px 16px" }}>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  )
}
