import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react"
import { Control, Controller, FieldValues, Path } from "react-hook-form"

type Props<T extends Partial<FieldValues>> = {
  control: Control<T>
  name: Path<T>
  label?: string
  helperText?: string
  errors: any
  question: string
  isDefaultChecked?: boolean
  onChange?: (e: any) => void
  isChecked?: boolean
}

export const AppCheckboxInput = <T extends FieldValues>({
  control,
  name,
  label,
  helperText,
  errors,
  question,
  isDefaultChecked = false,
  isChecked,
  onChange,
}: Props<T>) => {
  return (
    <FormControl isInvalid={!!errors?.[name]}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <Checkbox
              borderColor="#E2E8F0"
              {...field}
              onChange={onChange}
              defaultChecked={isDefaultChecked}
              isChecked={isChecked}
            >
              {question}
            </Checkbox>
          )
        }}
      />
      {!!errors?.[name] ? (
        <FormErrorMessage>{errors?.[name].message}</FormErrorMessage>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  )
}
