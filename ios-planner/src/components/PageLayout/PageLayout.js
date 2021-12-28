import { Col, Row } from ".."
import { PageLayoutStyle } from "./"

const PageLayout = props => {
  const { content } = props
  return (
    <Row>
      <PageLayoutStyle>
        <Col>
          {/* <TaskList /> */}
          {content}
        </Col>
      </PageLayoutStyle>
    </Row>
  )
}

export default PageLayout
