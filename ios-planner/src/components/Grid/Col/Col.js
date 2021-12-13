import { ColStyle } from "."

const Col = props => {
  const { children, span } = props
  return <ColStyle {...props}>{children}</ColStyle>
}

export default Col
