import { Row, Col } from "../Grid"
import { Text } from "../Text"
import { ButtonStyled, IconWrapper, ButtonWrapper } from "."

const Button = props => {
  const { children, icon, isHovered, isActive, size = "default" } = props

  return (
    <ButtonStyled
      isActive={isActive}
      isHovered={isHovered}
      size={size}
      {...props}>
      <IconWrapper
        data-testId="icon_wrapper"
        mr={icon && children && "6px"}
        {...props}>
        {icon}
      </IconWrapper>
      <Text {...props}>{children}</Text>
    </ButtonStyled>
  )
}

export default Button
