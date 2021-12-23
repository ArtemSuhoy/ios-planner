import { useState } from "react"

const useActive = () => {
  const [status, setStatus] = useState(false)
  return { status, setStatus }
}

export default useActive
