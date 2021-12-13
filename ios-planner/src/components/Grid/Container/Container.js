import { ContainerStyle } from "."
const Container = props => {
  const { children, size } = props
  return <ContainerStyle size={size}>{children}</ContainerStyle>
}

export default Container
