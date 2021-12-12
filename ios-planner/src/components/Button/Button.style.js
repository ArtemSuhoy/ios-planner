import styled, { css } from "styled-components"

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;

  ${props => {
    switch (props.size) {
      case "sm":
        return css`
          font-size: 12px;
          line-height: 20px;
          padding: 4px;
        `

      case "lg":
        return css`
          font-size: 20px;
          line-height: 28px;
          padding: 8px;
        `

      case "xl":
        return css`
          font-size: 24px;
          line-height: 30px;
          padding: 10px;
        `
      default:
        return css`
          font-size: 16px;
          line-height: 24px;
          padding: 6px;
        `
    }
  }}

  ${props =>
    props.isHovered &&
    css`
      color: #6e7278;
      &:hover {
        border-radius: 4px;
        background-color: #dae1e7;
      }
    `}

  ${props => {
    return (
      props.isActive &&
      css`
        color: #5f5f5f;
        &:active {
          color: #363636;
        }
      `
    )
  }}
`

export default ButtonStyled
