import { CheckboxStyle, CheckboxWrapper, CheckboxMap } from "."

const Checkbox = props => {
  const { condition, type = "default", onChange } = props
  return (
    <CheckboxWrapper onChange={onChange}>
      <CheckboxStyle />
      {CheckboxMap[type][condition]}
    </CheckboxWrapper>
  )
}

export default Checkbox
