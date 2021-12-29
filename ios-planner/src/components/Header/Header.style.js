import styled from "styled-components"

const HeaderWrapper = styled.div`
  color: #fff;

  position: relative;

  &:after {
    position: absolute;
    content: " ";
    background-color: var(--gray-darken2);
    width: 100vw;
    height: 1px;
  }
`

export { HeaderWrapper }
