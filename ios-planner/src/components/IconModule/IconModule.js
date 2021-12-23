import { IconModuleStyle } from "."

const Input = props => {
  const { children, size, variant = "primary", isActive = false } = props
  return (
    <IconModuleStyle size={size} variant={variant} isActive={isActive}>
      {children}
    </IconModuleStyle>
  )
}

export default Input
