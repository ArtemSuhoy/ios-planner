import { TextStyle } from "."

const Text = props => {
  const { children, size = false } = props
  return <TextStyle size={size}>{children}</TextStyle>
}

export default Text
