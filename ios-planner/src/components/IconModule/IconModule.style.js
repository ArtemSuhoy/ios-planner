import styled, { css } from "styled-components"

const VARIANT = {
  default: {
    primary: `
      background-color: #116bff;
      color: #fff;
    `,
    danger: `background-color: #fc4732;
           color: #fff;`,
    warning: `background-color: #ff9e04;
            color: #fff;`,

    light: `background-color: #fff
          color: #424345;
  `,
  },

  active: {
    primary: `color: #116bff;
              background-color: #fff;`,

    danger: `
    color: #fc4732;
    background-color: #fff;
    `,
    warning: `
    color: #ff9e04;
    background-color:#fff`,

    light: `
    background-color: #424345;
    color: #fffffb;
    `,
  },
}

const IconModuleStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  ${props =>
    props.isActive
      ? VARIANT.active[props.variant]
      : VARIANT.default[props.variant]};

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
`

export default IconModuleStyle
