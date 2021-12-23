import "./styles/styles.css"
import { Col, Row, Container, PageWrapper, Input } from "./components"
import { Sidebar } from "./components"
import { PlannerProvider } from "./contexts/Planner"
import {
  AiOutlineUnorderedList,
  AiOutlineSearch,
  AiOutlinePlusCircle,
  AiFillFlag,
  AiFillMail,
  AiOutlineCalendar,
  AiFillCalendar,
  AiOutlineSafety,
  AiFillPlusCircle,
} from "react-icons/ai"

const App = () => {
  /*Attributes: 
    Button: icon, children
    Button: size -> sm, md, lg
            type -> hovered
            type -> active
     */
  return (
    <div className="App">
      {/* <Container>
        <Row>
          <Col span={6}>2</Col>
          <Col span={6}>
            <Row>
              <Col sm={1} md={3} lg={4} xl={6} xxl={6} span={6}>
                1.1
              </Col>

              <Col sm={2} md={4} lg={5} xl={5} xxl={6} span={6}>
                1.2
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> */}
      <Container>
        <PlannerProvider>
          <Row className="fw-nowrap">
            <Col span={3} className="pl-none">
              <Sidebar></Sidebar>
            </Col>
            <Col span={9} className="pr-none">
              <PageWrapper />
            </Col>
          </Row>
        </PlannerProvider>
      </Container>
    </div>
  )
}

export default App
