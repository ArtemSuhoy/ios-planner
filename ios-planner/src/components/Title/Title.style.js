import styled, { css } from "styled-components"

const TitleStyle = styled.div`
  color: var(${props => props.color});
  ${props => {
    switch (props.level) {
      case 1:
        return css`
          font-size: 38px;
          line-height: 46px;
        `
      case 2:
        return css`
          font-size: 30px;
          line-height: 38px;
        `

      case 3:
        return css`
          font-size: 24px;
          line-height: 32px;
        `
      case 5:
        return css`
          font-size: 16px;
          line-height: 24px;
        `
      case 6:
        return css`
          font-size: 12px;
          line-height: 20px;
        `

      default:
        return css`
          font-size: 20px;
          line-height: 28px;
        `
    }
  }};
`

export default TitleStyle
