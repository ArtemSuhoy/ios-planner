import { useParams } from "react-router"
import { Container, Row, Col, PageLayout, Sidebar } from "../"
const AppLayout = props => {
  const { content, query } = props

  return (
    <Container>
      <Row className="fw-nowrap">
        <Col span={3} className="pl-none">
          <Sidebar query={query} />
        </Col>
        <Col span={9} className="pr-none">
          <PageLayout content={content} />
        </Col>
      </Row>
    </Container>
  )
}

export default AppLayout
