import { Col, Row } from "components"
import { TaskSimpleView } from ".."
import { useContext } from "react"
import { PlannerContext } from "contexts/Planner"
const TaskList = () => {
  const { state, currentCategory } = useContext(PlannerContext)

  return (
    <Row>
      <Col>
        {state.tasks.map(
          item =>
            currentCategory.id === item.parentId && (
              <TaskSimpleView
                taskId={item.taskId}
                taskStatus={item.taskStatus}
                taskFlag={item.taskFlag}>
                {item.taskName}
              </TaskSimpleView>
            )
        )}
      </Col>
    </Row>
  )
}

export default TaskList
