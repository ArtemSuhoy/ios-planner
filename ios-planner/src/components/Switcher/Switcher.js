import { SwitcherStyle, SwitcherWrapper } from "."
import { Col, Row, IconModule, Counter } from "../"

const Switcher = props => {
  const { icon, counter, title, variant = "primary", status } = props

  return (
    <SwitcherWrapper>
      <SwitcherStyle variant={variant} isActive={status}>
        <Row className="jc-spaceBetween">
          <Col span={1}>
            <IconModule variant={variant} isActive={status}>
              {icon}
            </IconModule>
          </Col>
          <Col span={1} className=" d-flex">
            <Counter size="lg">{counter}</Counter>
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
