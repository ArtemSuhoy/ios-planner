import styled from "styled-components"

const TaskSimpleFormUnderline = styled.div`
  position: relative;
  &:after {
    content: " ";
    height: 1px;
    width: 110%;
    background-color: var(--gray-darken2);
    position: absolute;
    left: 0px;
    bottom: -12px;
  }
`
const TaskSimpleFormWrapper = styled.div`
  display: flex;
`
export { TaskSimpleFormUnderline, TaskSimpleFormWrapper }
