import { ColStyle } from "."

const Col = props => {
  const { children } = props
  return (
    <ColStyle data-testid="Col" {...props}>
      {children}
    </ColStyle>
  )
}

export default Col
