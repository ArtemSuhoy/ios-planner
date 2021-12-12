import { InputStyle, IconWrapper } from "."

const Input = props => {
  const { type, placeholder, icon } = props

  return (
    <IconWrapper>
      {icon}
      <InputStyle type={type} placeholder={placeholder} />
    </IconWrapper>
  )
}

export default Input
