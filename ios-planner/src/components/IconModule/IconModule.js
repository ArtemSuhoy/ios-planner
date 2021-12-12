import { IconModuleStyle } from "."

const Input = props => {
  const { children, size, variant } = props
  return (
    <IconModuleStyle size={size} variant={variant}>
      {children}
    </IconModuleStyle>
  )
}

export default Input
