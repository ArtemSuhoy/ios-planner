import { Switcher, Row, Col } from "../"
import {
  AiFillCalendar,
  AiOutlineSearch,
  AiFillFlag,
  AiFillMail,
  AiOutlinePlusCircle,
} from "react-icons/ai"

const SwitcherGroup = () => {
  return (
    <Row>
      <Col sm={12} md={6}>
        <Switcher counter="3" title="Today" icon={<AiFillCalendar />} />
      </Col>
      <Col sm={12} md={6}>
        <Switcher
          counter="3"
          title="Shedule"
          icon={<AiFillCalendar />}
          variant="danger"
        />
      </Col>
      <Col sm={12} md={6}>
        <Switcher
          counter="3"
          title="All"
          icon={<AiFillMail />}
          variant="light"
        />
      </Col>
      <Col sm={12} md={6}>
        <Switcher
          counter="3"
          title="Flags"
          icon={<AiFillFlag />}
          variant="warning"
        />
      </Col>
    </Row>
  )
}

export default SwitcherGroup
