import styled, { css } from "styled-components"

const IconModuleStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  ${props => {
    switch (props.size) {
      case "sm":
        return css`
          font-size: 12px;
          height: 20px;
          width: 20px;
        `

      case "lg":
        return css`
          font-size: 24px;
          height: 32px;
          width: 32px;
        `

      default:
        return css`
          font-size: 20px;
          height: 28px;
          width: 28px;
        `
    }
  }};

  ${props => {
    switch (props.variant) {
      case "danger":
        return css`
          background-color: #fc4732;
        `
      case "warning":
        return css`
          background-color: #ff9e04;
        `

      case "light":
        return css`
          color: #61666c;
          background-color: #fffffb;
        `
      default:
        return css`
          background-color: #0a82fa;
        `
    }
  }}
`

export default IconModuleStyle
