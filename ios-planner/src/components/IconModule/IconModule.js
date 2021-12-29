import { IconModuleStyle } from "."

const Input = props => {
  const {
    children,
    size,
    variant = "primary",
    isActive = false,
    onClick,
  } = props
  return (
    <IconModuleStyle
      size={size}
      variant={variant}
      isActive={isActive}
      onClick={onClick}>
      {children}
    </IconModuleStyle>
  )
}

export default Input
