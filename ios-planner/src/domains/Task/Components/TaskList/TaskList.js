import { Col, Row, Title } from "../../../../components"
import { TaskSimpleForm, TaskSimpleView } from ".."
const TaskList = () => {
  return (
    <Row>
      <Col className="py-md">
        <Row>
          <Title level={3} color="--blue-default" className="fw-bold">
            List 1st
          </Title>
        </Row>
        <Row>
          <Col>
            <TaskSimpleView />
          </Col>
        </Row>
        <Row>
          <Col>
            <TaskSimpleForm />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default TaskList
