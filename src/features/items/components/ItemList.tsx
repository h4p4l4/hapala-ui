// src/features/items/components/ItemList.tsx

import React from "react"
import { Box, VStack, Text } from "@chakra-ui/react"
import { DataItem } from "../../../types/DataTileTypes"

const ItemList = ({ items, renderItem }) => {
  if (items && items.length === 0)
    return (
      <Text opacity={0.7} textAlign="center" py={5}>
        Пусто
      </Text>
    )

  return (
    <VStack spacing={4}>
      {items.map((item: DataItem) => renderItem(item))}
    </VStack>
  )
}

export default ItemList
