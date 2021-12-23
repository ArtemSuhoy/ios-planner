import styled, { css } from "styled-components"

const TextStyle = styled.div`
  margin: 0px;
  color: inherit;
  ${props => {
    switch (props.size) {
      case "sm":
        return css`
          font-size: 12px;
          line-height: 20px;
        `

      case "lg":
        return css`
          font-size: 20px;
          line-height: 28px;
        `

      case "xl":
        return css`
          font-size: 24px;
          line-height: 32px;
        `

      default:
        return css`
          font-size: 16px;
          line-height: 24px;
        `
    }
  }};
`

export default TextStyle
