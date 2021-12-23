import styled, { css } from "styled-components"

const SIZE = {
  iconSize: {
    sm: `font-size: 20px;`,
    lg: `font-size: 28px;`,
    xl: `font-size: 30px;`,
  },
  textSize: {
    sm: `font-size: 12px;
         line-height: 20px;
         padding: 4px; `,

    lg: `font-size: 20px;
          line-height: 28px;
          padding: 8px; `,

    xl: `font-size: 24px;
         line-height: 30px;
         padding: 10px;`,
  },
}

const IconWrapper = styled.div`
  margin-right: ${props => props.mr};
  display: flex;
  align-items: center;
  ${props => SIZE.iconSize[props.size] || "font-size: 24px"};
`

const ButtonStyled = styled.button`
  color: #6e7278;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0px;

  ${props =>
    SIZE.textSize[props.size] ||
    `font-size: 16px;
       line-height: 24px;
    `}

  ${props =>
    props.isHovered &&
    css`
      &:hover {
        border-radius: 4px;
        background-color: #dae1e7;
      }
    `}
    
    ${props => {
    return (
      props.isActive &&
      css`
        &:active {
          color: #363636;
        }
      `
    )
  }};
`

export { ButtonStyled, IconWrapper }
