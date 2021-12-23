import styled from "styled-components"
import { BsCircle, BsRecordCircle } from "react-icons/bs"

const CheckboxWrapper = styled.label`
  display: flex;
  position: relative;
  width: 24px;
  height: 24px;
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
  visibility: hidden;
`

const CheckboxChecked = styled(BsRecordCircle)`
  color: #0462f6;
  font-size: 24px;
`

const CheckboxUnchecked = styled(BsCircle)`
  color: #959595;
  font-size: 24px;
`

export { CheckboxStyle, CheckboxWrapper, CheckboxChecked, CheckboxUnchecked }
