// src/testData.ts

interface Item {
  id: string
  text: string
  category: string
}

const testData: Item[] = [...Array(105).keys()].map((i) => ({
  id: `id-${i + 1}`,
  text: `Запис eniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ${
    i + 1
  }`,
  category: `${String.fromCharCode(65 + (i % 3))}`, // 'Категорія A', 'Категорія B', 'Категорія C'
}))

export default testData
