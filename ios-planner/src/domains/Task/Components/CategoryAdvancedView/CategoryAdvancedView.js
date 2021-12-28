import { Col, Row, Header } from "components"
import { TaskSimpleForm, TaskSimpleView } from ".."
import { useContext } from "react"
import { PlannerContext } from "contexts/Planner"

const CategoryAdvancedView = () => {
  const { state, currentCategory } = useContext(PlannerContext)

  const completedTasksCounter = () => {
    let i = 0
    state.tasks.map(
      item =>
        item.parentId === currentCategory.id && item.taskStatus === true && i++
    )
    return i
  }

  return (
    currentCategory && (
      <Row>
        <Col className="py-md">
          <Row>
            <Col>
              <Header
                level={3}
                className="fw-bold"
                counter={completedTasksCounter()}>
                {currentCategory.name}
              </Header>
            </Col>
          </Row>
          <Row>
            <Col>
              {state.tasks.map(
                item =>
                  currentCategory.id === item.parentId && (
                    <TaskSimpleView
                      taskId={item.taskId}
                      taskStatus={item.taskStatus}>
                      {item.taskName}
                    </TaskSimpleView>
                  )
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <TaskSimpleForm parentId={currentCategory.id} />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  )
}

export default CategoryAdvancedView
