import { SwitcherStyle } from "."

const Switcher = ({ icons, counter, title }) => {
  return (
    <SwitcherStyle>
      <div>
        <div>{icons}</div>
        <div>{title}</div>
      </div>
      <div>{counter}</div>
    </SwitcherStyle>
  )
}

export default Switcher
