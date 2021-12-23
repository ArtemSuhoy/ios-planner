import { TextStyle } from "."

const Text = props => {
  const { children, size, onDoubleClick } = props
  return (
    <TextStyle size={size} onDoubleClick={onDoubleClick}>
      {children}
    </TextStyle>
  )
}

export default Text
