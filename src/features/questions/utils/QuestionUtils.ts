export const QuestionsConstants = {
  questionsCountPerPage: 2,
  defaultTitle: "Список питань",
  questionForm: {
    createTitle: "Додати запитання",
    editTitle: "Редагувати питання",
    createButtonText: "Додати запитання",
    editButtonText: "Редагувати питання",
    questionInput: {
      name: "questionTitle",
      label: "Назва запитання",
      placeholder: "Запитання",
      rules: {
        required: "Це поле є обовʼязковим",
        maxLength: {
          value: 10,
          message: "Максимальна кількість символів – 10",
        },
      },
    },
    optionInput: {
      name: "option",
      label: "Варiант вiдповiдi",
      placeholder: "Варiант",
    },
  },
}
