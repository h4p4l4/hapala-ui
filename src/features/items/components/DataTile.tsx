import React from "react"
import {
  Box,
  VStack,
  Button,
  Flex,
  ChakraProvider,
  Heading,
  IconButton,
} from "@chakra-ui/react"
import Pagination from "./Pagination"
import { AddIcon, RepeatIcon } from "@chakra-ui/icons"
import ItemList from "./ItemList"
import ActionButtons from "./ActionButtons"
import { DataTileProps, DataItem } from "../../../types/DataTileTypes"
import { QuestionsConstants } from "../../questions/utils/QuestionUtils"
import { UiSpinner } from "../../../components/UiSpinner/UiSpinner"

export const DataTile: React.FC<DataTileProps> = ({
  items,
  totalCount,
  editHandler,
  deleteHandler,
  refreshHandler,
  addHandler,
  changePage,
  title = QuestionsConstants.defaultTitle,
  itemsPerPage = QuestionsConstants.questionsCountPerPage,
  renderItem = () => {},
  isLoading,
  currentPage,
}) => {
  const handleEdit = (item: DataItem) => {
    editHandler(item)
  }

  const handleDeleteConfirm = (itemId: string) => {
    deleteHandler(itemId)
  }

  const handleAddNew = () => {
    addHandler()
  }

  const handleRefresh = () => {
    refreshHandler()
  }

  return (
    <ChakraProvider>
      <Box
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        p="24px"
        m="4"
        borderRadius="md"
      >
        <VStack spacing={8} align="stretch">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading color="gray.800">{title}</Heading>

            <Flex>
              {addHandler && (
                <Button
                  leftIcon={<AddIcon />}
                  colorScheme="yellow"
                  variant="solid"
                  onClick={handleAddNew}
                  marginRight={2}
                  bg="yellow.400"
                  color="gray.800"
                  _hover={{
                    bg: "yellow.500",
                  }}
                  _active={{
                    bg: "yellow.600",
                  }}
                  transition="all 0.2s ease-in-out"
                  boxShadow="md"
                >
                  Додати новий запис
                </Button>
              )}

              {refreshHandler && (
                <Box
                  _hover={{
                    bg: "gray.100",
                    borderRadius: "lg",
                  }}
                >
                  <IconButton
                    icon={<RepeatIcon />}
                    onClick={handleRefresh}
                    aria-label="Оновити"
                    colorScheme="gray"
                    variant="ghost"
                    _hover={{
                      transform: "rotate(45deg)",
                      transition: "transform 0.2s ease-in-out",
                    }}
                    _active={{
                      transform: "rotate(180deg)",
                      transition: "transform 0.1s ease-in-out",
                    }}
                  />
                </Box>
              )}
            </Flex>
          </Flex>

          {isLoading ? (
            <Flex w="100%" py="30px" justify="center">
              <UiSpinner />
            </Flex>
          ) : (
            <ItemList
              items={items}
              renderItem={(item: DataItem) => {
                return (
                  <Flex
                    key={item._id}
                    align="center"
                    justify="space-between"
                    p={4}
                    style={{ border: "#e2e8f0 1px solid" }}
                    borderWidth="1px"
                    borderRadius="lg"
                    w="full"
                    _hover={{
                      boxShadow: "md",
                    }}
                  >
                    <>
                      {renderItem && renderItem(item)}
                      {editHandler && addHandler && (
                        <ActionButtons
                          onEdit={() => handleEdit(item)}
                          onDelete={() => handleDeleteConfirm(item._id)}
                        />
                      )}
                    </>
                  </Flex>
                )
              }}
            />
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalCount / itemsPerPage)}
            onPageChange={changePage}
          />
        </VStack>
      </Box>
    </ChakraProvider>
  )
}
