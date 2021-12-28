import { Row, Col, Header, Title } from "components"
import {
  TaskList,
  CategoryAdvancedView,
  TaskSimpleView,
} from "domains/Task/Components"
import { useContext, useState } from "react"
import { PlannerContext } from "./../../contexts/Planner"
const TaskAll = props => {
  const { state } = useContext(PlannerContext)

  const AllTasks = state => {
    const result = state.categories.map(category => {
      let categoryId = category.taskListId
      let categoryName = category.taskListName
      return (
        <Row>
          <Col>
            <Row>
              <Col>
                <Title>{categoryName}</Title>
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
          <Col>{AllTasks(state)}</Col>
        </Row>
      </Col>
    </Row>
  )
}

export default TaskAll
