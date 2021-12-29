import { v4 as uuidv4 } from "uuid"
import { InputStyle, InputWrapper } from "."
import { useContext } from "react"
import { PlannerContext } from "contexts/Planner"

const Input = props => {
  const {
    type = "default",
    placeholder,
    icon,
    onBlur,
    autoFocus,
    onKeyDown,
    onChange,
    value,
  } = props

  return (
    <InputWrapper type={type}>
      {icon}
      <InputStyle
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        maxLength="110"
      />
    </InputWrapper>
  )
}

export default Input
