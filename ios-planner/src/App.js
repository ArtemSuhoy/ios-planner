import "./styles/styles.css"
import { Col, Row, Container, PageWrapper, Input } from "./components"
import { Sidebar } from "./components"
import { PlannerProvider } from "./contexts/Planner"

const App = () => {
  /*Attributes: 
    Button: icon, children
    Button: size -> sm, md, lg
            type -> hovered
            type -> active
     */
  return (
    <div className="App">
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
