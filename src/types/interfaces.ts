import { FieldValues, SubmitHandler } from "react-hook-form"

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  //TODO fix any
  onFormSubmit: (data?: any) => SubmitHandler<FieldValues>
}
