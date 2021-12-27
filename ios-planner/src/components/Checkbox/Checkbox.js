import { CheckboxStyle, CheckboxWrapper, CheckboxMap } from "."

const Checkbox = props => {
  const { taskCondition, onChange } = props
  return (
    <CheckboxWrapper onChange={onChange}>
      <CheckboxStyle />
      {CheckboxMap[taskCondition]}
    </CheckboxWrapper>
  )
}

export default Checkbox
