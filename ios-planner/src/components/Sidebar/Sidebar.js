import { SidebarStyle } from "."
import { Input, Col, Row, SwitcherGroup } from "../"
import { CategoryList } from "domains/Category/Components/CategoryList"
import { AiOutlineSearch } from "react-icons/ai"
import { PlannerContext } from "../../contexts/Planner"

const Sidebar = () => {
  return (
    <Row className="fd-column height-100">
      <SidebarStyle data-testId="sidebar">
        <Col className="d-flex fd-column">
          <Row className="flex-0">
            <Col>
              <Input
                type="search"
                placeholder="Search"
                icon={<AiOutlineSearch />}
              />
            </Col>
          </Row>

          <Row className="flex-0">
            <Col>
              <SwitcherGroup />
            </Col>
          </Row>

          <Row className="flex-1">
            <Col>
              <CategoryList />
            </Col>
          </Row>
        </Col>
      </SidebarStyle>
    </Row>
  )
}
export default Sidebar
