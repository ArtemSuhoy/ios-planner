import styled from "styled-components"

const COUNTER_STYLE_MAP = {
  sm: `
      font-size: 12px;
      line-height: 20px;
       color: var(--gray-lighten2);
    `,

  md: `
    font-size: 16px;
    line-height: 24px;
    color: var(--white-default);
    `,

  lg: `
    font-size: 20px;
    line-height: 24px;
    color: #fff;
  `,
}
const CounterStyle = styled.div`
  display: flex;
  align-items: center;
  ${props => COUNTER_STYLE_MAP[props.size] || COUNTER_STYLE_MAP.md}
`

export default CounterStyle
