import { Col, Row, Header } from ".."
import { TaskList } from "../../domains/Task/Components/TaskList"
import { PageWrapperStyle } from "./PageWrapper.style"

const PageWrapper = () => {
  return (
    <Row>
      <PageWrapperStyle>
        <Col>
          <Header />
        </Col>

        <Col>
          <TaskList />
        </Col>
      </PageWrapperStyle>
    </Row>
  )
}

export default PageWrapper
