import { TitleStyle } from "."

const Title = props => {
  const { children } = props

  return <TitleStyle {...props}>{children}</TitleStyle>
}

export default Title
