import { useState } from "react"

const useUpdateTaskName = () => {
  const [updateValue, setUpdateValue] = useState()
  return { updateValue, setUpdateValue }
}

export default useUpdateTaskName
