import { SwitcherStyle, SwitcherWrapper } from "."
import { Col, Row, IconModule, Counter } from "../"
import { useActive } from "./Hooks"

const Switcher = props => {
  const { icon, counter, title, variant = "primary" } = props
  const { status, setStatus } = useActive()

  return (
    <SwitcherWrapper onClick={() => setStatus(!status)}>
      <SwitcherStyle variant={variant} isActive={status}>
        <Row className="jc-spaceBetween">
          <Col span={1}>
            <IconModule variant={variant} isActive={status}>
              {icon}
            </IconModule>
          </Col>
          <Col span={1} className=" d-flex">
            <Counter size="lg">3 </Counter>
          </Col>
        </Row>
        <Row>
          <Col>{title}</Col>
        </Row>
      </SwitcherStyle>
    </SwitcherWrapper>
  )
}

export default Switcher
