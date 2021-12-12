import styled from "styled-components"
import { BsCircle, BsRecordCircle } from "react-icons/bs"

const CheckboxWrapper = styled.label`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 0;
    padding: 0;
    position: absolute;
  }
`
const CheckboxStyle = styled.input.attrs(props => ({
  type: "checkbox",
}))`
  display: none;
`

const CheckboxChecked = styled(BsRecordCircle)`
  color: #0462f6;
`

const CheckboxUnchecked = styled(BsCircle)`
  color: #959595;
`

export { CheckboxStyle, CheckboxWrapper, CheckboxChecked, CheckboxUnchecked }
