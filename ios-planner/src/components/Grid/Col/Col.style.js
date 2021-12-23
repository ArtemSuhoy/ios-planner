import styled, { css } from "styled-components"

const ColStyle = styled.div`
  flex: 1 0 0%;
  padding: ${props => `0 ${props.py}`};

  ${props =>
    props.span === "auto" &&
    css`
      flex: 0 0 0%;
      width: auto;
    `};

  ${props =>
    props.sm >= 1 && props.sm <= 12
      ? css`
          @media (min-width: 576px) {
            flex: 0 0 auto;
            flex-basis: ${props => (props.sm / 12) * 100}%;
          }
        `
      : false};

  ${props =>
    props.md >= 1 && props.md <= 12
      ? css`
          @media (min-width: 768px) {
            flex: 0 0 auto;
            flex-basis: ${props => (props.md / 12) * 100}%;
          }
        `
      : false};

  ${props =>
    props.lg >= 1 && props.lg <= 12
      ? css`
          @media (min-width: 992px) {
            flex: 0 0 auto;
            flex-basis: ${props => (props.lg / 12) * 100}%;
          }
        `
      : false};

  ${props =>
    props.xl >= 1 && props.xl <= 12
      ? css`
          @media (min-width: 1200px) {
            flex: 0 0 auto;
            flex-basis: ${props => (props.xl / 12) * 100}%;
          }
        `
      : false}

  ${props =>
    props.xxl >= 1 && props.xxl <= 12
      ? css`
          @media (min-width: 1400px) {
            flex: 0 0 auto;
            flex-basis: ${props => (props.xxl / 12) * 100}%;
          }
        `
      : false};

  ${props =>
    props.span >= 1 &&
    props.span <= 12 &&
    css`
      flex: 0 0 auto;
      flex-basis: ${props => (props.span / 12) * 100}%;
    `};
`
export default ColStyle
