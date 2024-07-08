import React, { useState } from "react"
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

const AddEditItemModal = ({ isOpen, onClose, item, onSave }) => {
  const [text, setText] = useState(item ? item.text : "")

  const handleSubmit = () => {
    onSave({ ...item, text })
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{item ? "Редагувати запис" : "Додати запис"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Текст</FormLabel>
            <Input value={text} onChange={(e) => setText(e.target.value)} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Зберегти
          </Button>
          <Button onClick={onClose}>Скасувати</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddEditItemModal
