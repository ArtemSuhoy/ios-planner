import { Col, Row, Checkbox, Text, Input } from "../../../../components"
import { TaskSimpleViewWrapper, TaskSimpleViewUnderline } from "."
import { useEditMode } from "./Hooks"
const TaskSimpleView = () => {
  const { mode, setMode } = useEditMode()
  return (
    <Row className="of-hidden">
      <TaskSimpleViewWrapper className="py-sm">
        <Col className="ai-center d-flex pr-md" span="auto">
          <Checkbox />
        </Col>

        <Col span={11} onDoubleClick={() => setMode(!mode)}>
          {mode ? (
            <Text size="md">Make to-do</Text>
          ) : (
            <Input onBlur={() => setMode(!mode)} type="default" />
          )}
          <TaskSimpleViewUnderline />
        </Col>
      </TaskSimpleViewWrapper>
    </Row>
  )
}

export default TaskSimpleView
