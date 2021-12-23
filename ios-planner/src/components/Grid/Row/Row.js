import { RowStyle } from "."
const Row = props => {
  const { children } = props
  return (
    <RowStyle data-testid="Row" {...props}>
      {children}
    </RowStyle>
  )
}

export default Row
