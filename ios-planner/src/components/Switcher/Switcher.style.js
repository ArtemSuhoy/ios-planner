import styled from "styled-components"
import { VARIANT_MAP } from "."

const SwitcherStyle = styled.div`
  ${props =>
    props.isActive
      ? VARIANT_MAP.default[props.variant]
      : ` color: #fff;
     background-color: #5f5f5f;`}

  border-radius: 12px;
  padding: 12px;

  &:hover {
    opacity: 0.8;
  }
`

const SwitcherWrapper = styled.div`
  padding: 6px 0px;
  width: 100%;
  min-width: 100px;
`

export { SwitcherStyle, SwitcherWrapper }
