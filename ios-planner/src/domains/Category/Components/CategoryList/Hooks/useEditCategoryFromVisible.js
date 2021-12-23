import { useState } from "react"

const useEditCategoryFormVisible = () => {
  const [categoryFormVisible, setCategoryFormVisible] = useState(false)
  return { categoryFormVisible, setCategoryFormVisible }
}

export default useEditCategoryFormVisible
