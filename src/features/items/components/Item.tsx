// src/features/items/components/Item.tsx

import React from "react"
import { HStack, Text, IconButton, Tag } from "@chakra-ui/react"
import { EditIcon, DeleteIcon } from "@chakra-ui/icons"

const Item = ({ item, onEdit, onDelete }) => {
  return (
    <HStack
      w="100%"
      bg="white"
      p={4}
      boxShadow="sm"
      borderRadius="md"
      justifyContent="space-between"
    >
      <Text>{item.text}</Text>
      <Tag size="sm" colorScheme="blue" borderRadius="full">
        {item.category}
      </Tag>
      <HStack>
        <IconButton
          aria-label="Edit item"
          icon={<EditIcon />}
          onClick={() => onEdit(item.id)}
        />
        <IconButton
          aria-label="Delete item"
          icon={<DeleteIcon />}
          colorScheme="red"
          onClick={() => onDelete(item.id)}
        />
      </HStack>
    </HStack>
  )
}

export default Item
