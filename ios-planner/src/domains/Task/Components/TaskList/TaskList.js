import { Col, Row, Header } from "components"
import { TaskSimpleForm, TaskSimpleView } from ".."
import { useContext } from "react"
import { PlannerContext } from "contexts/Planner"
const TaskList = () => {
  const { state, currentCategory } = useContext(PlannerContext)
  console.log(currentCategory)
  return (
    currentCategory && (
      <Row>
        <Col className="py-md">
          <Row>
            <Col>
              <Header level={3} color="--blue-default" className="fw-bold">
                {currentCategory.name}
              </Header>
            </Col>
          </Row>
          <Row>
            <Col>
              {state.tasks.map(item =>
                currentCategory.id === item.parentId ? (
                  <TaskSimpleView
                    taskId={item.taskId}
                    taskStatus={item.taskStatus}>
                    {item.taskName}
                  </TaskSimpleView>
                ) : (
                  false
                )
              )}
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
  )
}

export default TaskList
