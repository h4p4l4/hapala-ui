import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react"

const EditModal = ({ isOpen, onClose, item }) => {
  // Тут логіка модалки для редагування
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{item ? "Редагувати запис" : "Додати запис"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{/* Тіло модалки */}</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Зберегти
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Скасувати
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default EditModal
