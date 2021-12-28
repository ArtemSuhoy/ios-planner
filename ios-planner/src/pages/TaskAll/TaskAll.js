import { Row, Col, Header, Title } from "components"
import { TaskSimpleView, TaskSimpleForm } from "domains/Task/Components"
import { useContext } from "react"
import { PlannerContext } from "./../../contexts/Planner"
const TaskAll = () => {
  const { state } = useContext(PlannerContext)

  const showTasksAll = state => {
    const result = state.categories.map(category => {
      let categoryId = category.taskListId
      let categoryName = category.taskListName
      return (
        <Row>
          <Col>
            <Row>
              <Col>
                <Title color="--blue-default" className="fw-bold">
                  {categoryName}
                </Title>
              </Col>
            </Row>
            <Row>
              <Col>
                {state.tasks.map(task => {
                  return (
                    categoryId === task.parentId && (
                      <TaskSimpleView
                        taskStatus={task.taskStatus}
                        taskId={task.taskId}>
                        {task.taskName}
                      </TaskSimpleView>
                    )
                  )
                })}
              </Col>
            </Row>
            <Row>
              <Col>
                <TaskSimpleForm parentId={categoryId} />
              </Col>
            </Row>
          </Col>
        </Row>
      )
    })
    return result
  }

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <Header>All</Header>
          </Col>
        </Row>
        <Row>
          <Col>{showTasksAll(state)}</Col>
        </Row>
      </Col>
    </Row>
  )
}

export default TaskAll
