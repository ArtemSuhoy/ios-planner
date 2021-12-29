import { Row, Col, Header } from "components"
import { TaskSimpleView } from "domains/Task/Components"
import { useContext } from "react"
import { PlannerContext } from "../../contexts/Planner"
const TaskFlag = () => {
  const { state } = useContext(PlannerContext)

  const showFlagTask = state => {
    const result = state.tasks.map(task => {
      return (
        task.taskFlag === true && (
          <TaskSimpleView
            taskStatus={task.taskStatus}
            taskId={task.taskId}
            taskFlag={task.taskFlag}>
            {task.taskName}
          </TaskSimpleView>
        )
      )
    })

    return result
  }

  const completedTasksCounter = () => {
    let i = 0
    state.tasks.map(
      item => item.taskFlag === true && item.taskStatus === true && i++
    )
    return i
  }

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <Header color="--yellow-default" counter={completedTasksCounter()}>
              Flags
            </Header>
          </Col>
        </Row>
        <Row>
          <Col>{showFlagTask(state)}</Col>
        </Row>
      </Col>
    </Row>
  )
}

export default TaskFlag
