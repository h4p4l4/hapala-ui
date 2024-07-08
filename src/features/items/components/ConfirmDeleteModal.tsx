import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ChakraProvider,
  Text,
  ModalBody,
} from "@chakra-ui/react"

export const ConfirmDeleteModal = ({
  isOpen,
  onClose,
  itemId,
  onDelete,
  desc,
}) => {
  // Тут логіка модалки для підтвердження видалення
  return (
    <ChakraProvider>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Підтвердження видалення</ModalHeader>
          <ModalBody>
            <Text color="grey">{desc}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={() => onDelete(itemId)}>
              Видалити
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Скасувати
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  )
}
