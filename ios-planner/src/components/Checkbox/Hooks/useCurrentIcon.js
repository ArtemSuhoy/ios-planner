import { useState } from "react"
const useCurrentIcon = state => {
  const [currentIcon, setCurrentIcon] = useState(false)
  return { currentIcon, setCurrentIcon }
}

export { useCurrentIcon }
