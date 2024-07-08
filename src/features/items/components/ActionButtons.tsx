import React from "react"
import { Flex, IconButton } from "@chakra-ui/react"
import { EditIcon, DeleteIcon } from "@chakra-ui/icons"

const ActionButtons = ({ onEdit, onDelete }) => {
  return (
    <Flex marginLeft={2}>
      <IconButton
        icon={<EditIcon />}
        onClick={onEdit}
        aria-label="Редагувати"
        mr={2}
        colorScheme="yellow" // Змінено колірну схему для кнопки редагування
        variant="outline" // Додано обведення для більш виразного вигляду
      />
      <IconButton
        icon={<DeleteIcon />}
        onClick={onDelete}
        aria-label="Видалити"
        colorScheme="red" // Залишено червону схему для видалення для інтуїтивного розуміння
        variant="ghost" // Змінено на "привид" для менш агресивного вигляду
      />
    </Flex>
  )
}

export default ActionButtons
