import { Fragment, useState } from "react"
import { ChakraProvider, Text } from "@chakra-ui/react"
import { ThreeDotsMenu } from "./components/ThreeDotsMenu/ThreeDotsMenu"
import { Dropzone } from "./components/Dropzone/Dropzone"
import { FileList } from "./components/FileList/FileList"

const options = [
  {
    label: "option 1",
    onSelect: () => {},
  },
  {
    label: "option 2",
    onSelect: () => {},
  },
  {
    label: "option 3",
    onSelect: () => {},
  },
]

const App = () => {
  const [files, setFiles] = useState<File[]>([])

  const onFileUpload = (uploadedFiles: File[]) => {
    setFiles((prevState) => [...prevState, ...uploadedFiles])
  }

  const onFileRemove = (uploadedFile: File) => {
    setFiles((prevState: File[]) =>
      prevState.filter((file) => file !== uploadedFile),
    )
  }

  const fileUrls = [
    "https://agents-app-test.s3.eu-north-1.amazonaws.com/010b2a46-72bf-4f01-9017-0377b563e364.jpg",
    "https://agents-app-test.s3.eu-north-1.amazonaws.com/2a6baca0-b22f-4dd3-bf99-e3321e9d7b29.png",
    "https://agents-app-prod.s3.amazonaws.com/3f207cedc0a28a24ce344483bfe91b8c.jpg",
  ]

  return (
    <ChakraProvider>
      <Text>ThreeDotsMenu:</Text>
      <ThreeDotsMenu options={options} />

      {files.length > 0 && (
        <Fragment>
          <Text>PhotoList:</Text>
          <FileList
            files={files}
            fileLinks={fileUrls}
            removePhoto={onFileRemove}
          />
        </Fragment>
      )}

      <Text>Dropzone:</Text>
      <Dropzone onDrop={onFileUpload} />
    </ChakraProvider>
  )
}

export default App
