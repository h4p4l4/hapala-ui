import React from "react"
import { Button, HStack } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  let startPage: number
  let endPage: number

  if (totalPages <= 5) {
    startPage = 1
    endPage = totalPages
  } else {
    if (currentPage <= 3) {
      startPage = 1
      endPage = 5
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4
      endPage = totalPages
    } else {
      startPage = currentPage - 2
      endPage = currentPage + 2
    }
  }

  return (
    <HStack spacing={2} justifyContent="center">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1 || totalPages === 0}
        colorScheme="gray" // Змінено схему кольорів на сіру
        variant="outline" // Використовуємо обведення для легкості візуального сприйняття
        _hover={{
          bg: "gray.100",
          boxShadow: "md",
        }}
      >
        <ChevronLeftIcon />
      </Button>
      {startPage > 1 && (
        <Button
          onClick={() => onPageChange(1)}
          colorScheme="gray"
          variant="ghost"
        >
          1
        </Button>
      )}
      {startPage > 2 && (
        <Button disabled colorScheme="gray" variant="ghost">
          ...
        </Button>
      )}
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i,
      ).map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          colorScheme={currentPage === page ? "yellow" : "gray"} // Виділення активної сторінки жовтим
          variant={currentPage === page ? "solid" : "ghost"} // Використання solid для активної сторінки
          _hover={currentPage !== page && { bg: "gray.200" }}
        >
          {page}
        </Button>
      ))}
      {endPage < totalPages - 1 && (
        <Button disabled colorScheme="gray" variant="ghost">
          ...
        </Button>
      )}
      {endPage < totalPages && (
        <Button
          onClick={() => onPageChange(totalPages)}
          colorScheme="gray"
          variant="ghost"
        >
          {totalPages}
        </Button>
      )}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages || totalPages === 0}
        colorScheme="gray"
        variant="outline"
        _hover={{
          bg: "gray.100",
          boxShadow: "md",
        }}
      >
        <ChevronRightIcon />
      </Button>
    </HStack>
  )
}

export default Pagination
