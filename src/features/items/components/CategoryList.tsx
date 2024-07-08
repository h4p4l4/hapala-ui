// src/features/items/components/CategoryTile.tsx

import React from "react"
import { Box, Wrap, WrapItem } from "@chakra-ui/react"
import CategoryTile from "./CategoryTile"

const CategoryList = ({ handleCategorySelect, selectedCategory }) => {
  return (
    <Wrap spacing="20px" justify="flex-start">
      {/*{["All", "A", "B", "C"].map((category) => (*/}
      {[
        "Усі",
        "Питання abc з однією відповідю",
        "Питання abc з декльікома відповідю",
        "Відповідності",
      ].map((category) => (
        <WrapItem key={category}>
          <CategoryTile
            category={{ id: category, name: category }}
            onSelect={handleCategorySelect}
            isSelected={selectedCategory === category}
          />
        </WrapItem>
      ))}
    </Wrap>
  )
}

export default CategoryList
