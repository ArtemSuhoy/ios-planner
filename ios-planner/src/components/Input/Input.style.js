import styled, { css } from "styled-components"
import INPUT_STYLE from "./input.map"
const InputWrapper = styled.div`
  display: flex;
  position: relative;
  font-size: 20px;
  max-width: 100%;
  padding: 0px;
  ${props => (props.type === "search" ? `padding: 8px 0px 4px;` : false)}
  align-items: center;
  
  & > svg {
      color: #fff;
      position absolute;
      top: 50%;
      margin-top: -8px;
      margin-left: 5px;
  }

`

const InputStyle = styled.input`
  ${props => INPUT_STYLE[props.type]}
`

export { InputStyle, InputWrapper }
