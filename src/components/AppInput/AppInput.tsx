import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react"
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form"

type Props<T extends Partial<FieldValues>> = {
  //TODO fix any
  control: Control<FieldValues, any>
  name: Path<T>
  label?: string
  errors: any
  rules?: RegisterOptions
  placeholder?: string
  value?: string
  disabled?: boolean
  isReadOnly?: boolean
  inputProps?: InputProps
}

export const AppInput = <T extends FieldValues>({
  control,
  name,
  label,
  errors,
  rules,
  placeholder,
  value,
  disabled = false,
  isReadOnly = false,
  inputProps,
}: Props<T>) => {
  return (
    <ChakraProvider>
      <FormControl isInvalid={!!errors?.[name]}>
        {label && (
          <FormLabel htmlFor={name}>
            {label}
            {rules && rules?.required && (
              <span style={{ color: "#ef6565" }}> *</span>
            )}
          </FormLabel>
        )}

        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field }) => (
            <Input
              {...field}
              {...inputProps}
              placeholder={placeholder}
              value={value || field.value}
              disabled={disabled}
              isReadOnly={isReadOnly}
              borderColor="#E2E8F0"
              _hover={{ borderColor: "#A0AEC0 !important" }}
              _active={{ borderColor: "#A0AEC0 !important" }}
            />
          )}
        />

        {!!errors?.[name] && (
          <FormErrorMessage mt="8px">{errors?.[name].message}</FormErrorMessage>
        )}
      </FormControl>
    </ChakraProvider>
  )
}
