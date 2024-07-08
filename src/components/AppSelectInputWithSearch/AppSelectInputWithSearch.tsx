import React, { forwardRef } from "react"
import Select, { StylesConfig, ActionMeta, components } from "react-select"
import {
  chakra,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Tooltip,
  SelectProps,
} from "@chakra-ui/react"
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form"

const ChakraReactSelect = chakra(Select)

interface OptionType {
  value: string | number
  label: string | undefined
}

type Props<T extends Partial<FieldValues>> = {
  control: Control<FieldValues, any>
  name: Path<T>
  errors: any
  options: OptionType[]
  selectProps?: SelectProps
  label?: string
  placeholder?: string
  helperText?: string
  w?: number | string
  rules?: RegisterOptions
  value?: string | number | (string | number)[]
  isMulti?: boolean
  isDisabled?: boolean
}

export const AppSelectInputWithSearch = <T extends FieldValues>({
  control,
  name,
  label,
  helperText,
  errors,
  options,
  placeholder,
  rules,
  w = 210,
  value,
  isMulti = false,
  isDisabled = false,
  selectProps,
}: Props<T>) => {
  const borderColorDefault = "hsl(214.29deg 31.82% 91.37%)"
  const textColorDefault = "#718096"

  let customStyles: StylesConfig<any>

  if (isMulti) {
    customStyles = {
      menuPortal: (base: any) => ({
        ...base,
        zIndex: 9999,
      }),
      control: (provided: any) => ({
        ...provided,
        borderColor: errors?.[name] ? "#e53e3e" : borderColorDefault,
        color: errors?.[name] ? "#e53e3e" : textColorDefault,
        borderWidth: errors?.[name] ? "2px" : "1px",
        "&:hover": {
          borderColor: errors?.[name] ? "#e53e3e" : borderColorDefault,
        },
        boxShadow: "none",
        minHeight: "40px",
        height: "auto",
      }),
      multiValueLabel: (base: any) => ({
        ...base,
        maxWidth: "90px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }),

      multiValue: (base: any, state) => ({
        ...base,
      }),
      multiValueRemove: (base: any, state) => ({
        ...base,
        ":hover": {
          backgroundColor: "red",
          color: "white",
        },
      }),
      valueContainer: (provided: any) => ({
        ...provided,
        flexWrap: "wrap",
        maxWidth: "100%",
        overflow: "hidden",
        "> div:last-child": {
          width: "0px",
        },
      }),
      clearIndicator: (provided: any) => ({
        ...provided,
        display: "none",
      }),
      input: (provided: any) => {
        return { ...provided }
      },
    }
  } else {
    customStyles = {
      menuPortal: (base: any) => ({
        ...base,
        zIndex: 9999,
      }),
      control: (provided: any, state: any) => ({
        ...provided,
        borderColor: !!errors?.[name] ? "#e53e3e" : borderColorDefault,
        color: !!errors?.[name] ? "#e53e3e" : textColorDefault, // Колір тексту
        borderWidth: !!errors?.[name] ? "2px" : "1px",
        "&:hover": {
          borderColor: !!errors?.[name] ? "#e53e3e" : borderColorDefault,
        },
        boxShadow: state.isFocused
          ? !!errors?.[name]
            ? `0 0 0 0px #e53e3e`
            : `0 0 0 1px #3182ce`
          : "none",
        height: "40px",
        borderRadius: "7px",
      }),
    }
  }

  const customComponents: any = {
    ClearIndicator: () => null,
    MultiValueLabel: forwardRef<HTMLDivElement, any>(
      ({ children, ...props }, ref) => (
        <Tooltip label={children} placement="top" hasArrow>
          <div ref={ref}>
            <components.MultiValueLabel {...props}>
              {children}
            </components.MultiValueLabel>
          </div>
        </Tooltip>
      ),
    ),
  }

  const getValue = (field: any) => {
    if (isMulti && Array.isArray(value)) {
      return options.filter((option) => value?.includes(option.value))
    } else {
      return options.find((option) => option.value === (value || field.value))
    }
  }

  return (
    <FormControl isInvalid={!!errors?.[name]}>
      {label && (
        <FormLabel htmlFor={name}>
          {label}{" "}
          {rules && rules?.required && (
            <span style={{ color: "#ef6565" }}> *</span>
          )}
        </FormLabel>
      )}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => {
          return (
            <ChakraReactSelect
              {...field}
              {...selectProps}
              isDisabled={isDisabled}
              placeholder={placeholder}
              w={w}
              options={options}
              styles={customStyles}
              components={customComponents}
              menuPortalTarget={document.body}
              isMulti={isMulti}
              // value={getValue(field)}
              value={getValue(field)}
              borderRadius="0.375rem"
              onChange={(
                newValue: unknown,
                actionMeta: ActionMeta<unknown>,
              ) => {
                if (isMulti && Array.isArray(newValue)) {
                  const selectedOptions = newValue as OptionType[]
                  const values = selectedOptions.map((option) => option.value)
                  field.onChange(values)
                } else if (
                  !isMulti &&
                  typeof newValue === "object" &&
                  newValue !== null &&
                  "value" in newValue
                ) {
                  const selectedOption = newValue as OptionType
                  field.onChange(selectedOption.value)
                }
              }}
            />
          )
        }}
      />
      {!!errors?.[name] ? (
        <FormErrorMessage>{errors[name].message}</FormErrorMessage>
      ) : helperText ? (
        <FormHelperText>{helperText}</FormHelperText>
      ) : null}
    </FormControl>
  )
}
