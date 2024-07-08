import { ReactNode } from "react"

export interface DataItem {
  _id: string
  categoryId: string
  correctAnswer: string[]
  options: string[]
  text: string
  createdAt: Date
  updatedAt: Date
}

export interface DataTileProps {
  items: any[]
  totalCount: number
  currentPage: number
  changePage: (pageNumber: number) => void
  isLoading: boolean
  editHandler?: (item: DataItem) => void
  deleteHandler?: (itemId: string) => void
  addHandler?: () => void
  refreshHandler?: () => void
  title?: string
  itemsPerPage?: number
  renderItem?: (item: DataItem) => JSX.Element
  // status?: any

  // data: any[] // Масив даних для відображення
  // renderItem: (item: any) => JSX.Element // Функція для рендеру кожного айтема
  // onEdit: (item: any) => void // Функція для обробки події редагування айтема
  // onDelete: (item: any) => void // Функція для обробки події видалення айтема
  // itemsPerPage?: number // Кількість айтемів на сторінку
  // renderPagination?: (
  //   currentPage: number,
  //   totalPages: number,
  //   setPage: (page: number) => void,
  // ) => JSX.Element // Опціональна функція для рендеру кастомної пагінації
}

// type TestDataStatus = "idle" | "loading" | "succeeded" | "failed"

// old TestData
// interface TestData {
//   data: TestDataItem[]
//   limit: number
//   page: number
//   status: TestDataStatus
//   totalCount: number
// }
