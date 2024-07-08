import { CustomModal } from "../../../components/CustomModal/CustomModal"
import { ModalProps } from "../../../types/interfaces"
import { CategoriesConstants } from "../utils/CategoriesUtils"
import { AppInput } from "../../../components/AppInput/AppInput"
import { SubmitButton } from "../../../components/SubmitButton/SubmitButton"
import React, { CSSProperties } from "react"
import { useForm } from "react-hook-form"

export const CreateCategoryModal = (props: ModalProps) => {
  const { isOpen, onClose, onFormSubmit } = props

  const {
    control,
    watch,
    setValue,
    handleSubmit: useFormSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const categoryForm = CategoriesConstants.categoryForm
  const categoryInput = CategoriesConstants.categoryForm.categoryInput
  const categoryInputValue = watch(categoryInput.name)

  const formStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  }

  const handleCreateCategory = (data): any => {
    onFormSubmit({ title: data.categoryTitle, type: "question" })
  }

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      title={categoryForm.createTitle}
    >
      <form onSubmit={useFormSubmit(handleCreateCategory)} style={formStyle}>
        <AppInput
          control={control}
          name={categoryInput.name}
          errors={errors}
          placeholder={categoryInput.placeholder}
          label={categoryInput.label}
          rules={categoryInput.rules}
        />

        <SubmitButton
          submitTitle={categoryForm.createButtonText}
          isSubmitting={isSubmitting}
        />
      </form>
    </CustomModal>
  )
}
