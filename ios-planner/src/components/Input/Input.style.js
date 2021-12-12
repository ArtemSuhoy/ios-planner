import styled, { css } from "styled-components"

const IconWrapper = styled.div`
  display: flex;
  position: relative;
  font-size: 20px;
  & > svg {
      color: #fff;
      position absolute;
      top: 50%;
      margin-top: -10px;
      margin-left: 5px;
  }

`

const InputStyle = styled.input`
  ${props => {
    switch (props.type) {
      case "search":
        return css`
          border: 3px solid transparent;
          background-color: #4f5052;
          border-radius: 4px;
          padding: 5px 10px 5px 25px;
          max-width: 300px;
          width: 100%;
          &:focus {
            outline: none;
            border-color: #007aff;
          }
          color: #fff;
          line-height: 20px;
        `
      case "addTask":
        return css`
          border: 1ps solid #000;
        `
      default:
        return css`
          border: none;
          &:focus {
            outline: none;
            background-color: transparent;
          }
        `
    }
  }}
`

export { InputStyle, IconWrapper }
