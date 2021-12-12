import { TitleStyle } from "."

const Title = props => {
  const { level, children } = props

  return <TitleStyle level={level}>{children}</TitleStyle>
}

export default Title
