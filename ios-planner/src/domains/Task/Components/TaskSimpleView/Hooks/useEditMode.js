import { useState } from "react"

const useEditMode = () => {
  const [mode, setMode] = useState(true)
  return { mode, setMode }
}

export default useEditMode
