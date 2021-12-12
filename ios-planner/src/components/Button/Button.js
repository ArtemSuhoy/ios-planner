import { ButtonStyled } from "."

const Button = props => {
  const { children, icon, isHovered, isActive, size } = props

  return (
    <ButtonStyled isActive={isActive} isHovered={isHovered} size={size}>
      {icon}
      {children}
    </ButtonStyled>
  )
}

export default Button
