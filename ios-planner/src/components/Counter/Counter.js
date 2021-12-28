import { CounterStyle } from "."

const Counter = props => {
  const { children, size } = props
  return (
    <CounterStyle size={size} {...props}>
      {children}
    </CounterStyle>
  )
}

export default Counter
