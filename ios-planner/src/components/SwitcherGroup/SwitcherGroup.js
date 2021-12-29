import { Switcher, Row, Col } from "../"
import { AiFillCalendar, AiFillFlag, AiFillMail } from "react-icons/ai"

import { Link } from "react-router-dom"

import { PlannerContext } from "contexts/Planner"
import { useContext } from "react"
const SwitcherGroup = props => {
  const { query } = props

  const { state } = useContext(PlannerContext)
  const counter = type => {
    if (type === "all") {
      return state.tasks.length
    }
    if (type === "flags") {
      let flags = state.tasks.filter(item => item.taskFlag === true)
      return flags.length
    }
  }
  return (
    <Row>
      <Col sm={12} md={6}>
        <Link to="today">
          <Switcher
            counter="3"
            title="Today"
            icon={<AiFillCalendar />}
            status={query === "/today" ? true : false}
          />
        </Link>
      </Col>
      <Col sm={12} md={6}>
        <Link to="sheduled">
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
            counter={counter("all")}
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
            counter={counter("flags")}
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
