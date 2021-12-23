import { useState } from "react"

const useCategoryMode = () => {
  const [categoryMode, setCategoryMode] = useState(true)
  return { categoryMode, setCategoryMode }
}

export default useCategoryMode
