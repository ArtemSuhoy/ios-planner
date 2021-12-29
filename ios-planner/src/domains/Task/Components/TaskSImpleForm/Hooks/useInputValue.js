import { useState } from "react"
const useInputValue = () => {
  const [value, setValue] = useState()
  return { value, setValue }
}

export default useInputValue
