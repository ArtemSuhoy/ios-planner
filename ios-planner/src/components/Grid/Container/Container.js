import { ContainerStyled } from "."
const Container = props => {
  const { children } = props
  return (
    <ContainerStyled data-testid="Container" {...props}>
      {children}
    </ContainerStyled>
  )
}

export default Container
