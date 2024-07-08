import React from "react"
import { Box } from "@chakra-ui/react"

const CategoryItem = ({ category, onSelect, isSelected }) => {
  return (
    <Box
      as="button"
      // borderWidth="2px"
      borderColor={isSelected ? "yellow.500" : "gray.300"}
      bg={isSelected ? "yellow.100" : "gray.100"}
      p={2} // Збільшено падінг для кращого візуального сприйняття
      m={0} // Збільшено відступ
      borderRadius="lg" // Збільшено радіус для більш сучасного вигляду
      // fontWeight="bold" // Зроблено текст жирнішим для кращої видимості
      // boxShadow={isSelected ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none"} // Додано тінь для виділеного елемента
      _hover={{
        // bg: "yellow.50",
        borderColor: "yellow.500",
        // transform: "translateY(-2px)", // Додано анімацію переміщення для ефекту при наведенні
        // boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.15)", // Змінено тінь при наведенні
        boxShadow: "md", // Змінено тінь при наведенні
      }}
      onClick={() => onSelect(category.id)}
      width="full"
      textAlign="left"
      transition="all 0.2s ease-in-out" // Додано перехід для плавності анімацій
    >
      {category.name}
    </Box>
  )
}

export default CategoryItem
