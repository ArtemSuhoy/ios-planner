import { Col, Row, Checkbox, Text, Input, Button } from "components"
import { TaskSimpleViewWrapper, TaskSimpleViewUnderline } from "."
import { AiOutlineClose } from "react-icons/ai"
import { useEditMode, useUpdateTaskName } from "./Hooks"
import { useContext } from "react"
import { PlannerContext } from "contexts/Planner"
const TaskSimpleView = props => {
  const { mode, setMode } = useEditMode()
  const { updateValue, setUpdateValue } = useUpdateTaskName()
  const { taskId, children, taskStatus } = props
  const { deleteTask, updateTask } = useContext(PlannerContext)

  return (
    <Row className="of-hidden">
      <TaskSimpleViewWrapper className="py-sm">
        <Col className="ai-center d-flex pr-md" span="auto">
          <Checkbox
            taskCondition={taskStatus}
            onChange={() => updateTask(taskId, { taskStatus: !taskStatus })}
          />
        </Col>

        <Col onDoubleClick={() => setMode(!mode)}>
          <Row>
            <Col>
              {mode ? (
                <Text size="md">{children}</Text>
              ) : (
                <Input
                  onBlur={() => setMode(!mode)}
                  onChange={e => setUpdateValue(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === "Enter") {
                      setMode(true)
                      updateTask(taskId, { taskName: updateValue })
                    }
                  }}
                  type="default"
                  autoFocus={true}
                />
              )}
            </Col>
            <Col span="auto">
              <Button
                icon={<AiOutlineClose />}
                onClick={() => deleteTask(taskId)}
              />
            </Col>
          </Row>
          <TaskSimpleViewUnderline />
        </Col>
      </TaskSimpleViewWrapper>
    </Row>
  )
}

export default TaskSimpleView
