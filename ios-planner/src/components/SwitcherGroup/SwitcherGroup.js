import { Switcher, Row, Col } from "../"
import { AiFillCalendar, AiFillFlag, AiFillMail } from "react-icons/ai"

import { Link } from "react-router-dom"
const SwitcherGroup = props => {
  const { query } = props
  return (
    <Row>
      <Col sm={12} md={6}>
        <Link to="/today">
          <Switcher
            counter="3"
            title="Today"
            icon={<AiFillCalendar />}
            status={query === "/today" ? true : false}
          />
        </Link>
      </Col>
      <Col sm={12} md={6}>
        <Link to="/sheduled">
          <Switcher
            counter="3"
            title="Sheduled"
            icon={<AiFillCalendar />}
            variant="danger"
            status={query === "/sheduled" ? true : false}
          />
        </Link>
      </Col>
      <Col sm={12} md={6}>
        <Link to="all">
          <Switcher
            counter="3"
            title="All"
            icon={<AiFillMail />}
            variant="light"
            status={query === "/all" ? true : false}
          />
        </Link>
      </Col>
      <Col sm={12} md={6}>
        <Link to="flags">
          <Switcher
            counter="3"
            title="Flags"
            icon={<AiFillFlag />}
            variant="warning"
            status={query === "/flags" ? true : false}
          />
        </Link>
      </Col>
    </Row>
  )
}

export default SwitcherGroup
