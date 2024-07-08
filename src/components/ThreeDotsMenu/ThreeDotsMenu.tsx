import {
  ChakraProvider,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import { DragHandleIcon } from "@chakra-ui/icons"

interface Option {
  label: string
  onSelect: () => void
}

interface Props {
  options: Option[]
}

export const ThreeDotsMenu = (props: Props) => {
  const { options } = props

  return (
    <ChakraProvider>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<DragHandleIcon />}
          size="xs"
          variant="outline"
        />
        <MenuList
          boxShadow="0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)"
          borderRadius="md"
        >
          {options.map((option, index) => (
            <MenuItem
              style={{ fontSize: "14px" }}
              key={index}
              onClick={option.onSelect}
            >
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </ChakraProvider>
  )
}
