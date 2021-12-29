import { Col, Row, Button, Input } from "components"
import { AiFillPlusCircle } from "react-icons/ai"
import { TaskSimpleFormWrapper, TaskSimpleFormUnderline } from "."
import { v4 as uuidv4 } from "uuid"
import { useContext } from "react"
import { useInputValue } from "./Hooks"
import { PlannerContext } from "contexts/Planner"
const TaskSimpleForm = props => {
  const { parentId } = props
  const { createTask } = useContext(PlannerContext)
  const { value, setValue } = useInputValue()

  const AddTask = e => {
    if (e.key === "Enter") {
      createTask({
        taskName: value,
        taskId: uuidv4(),
        taskStatus: false,
        taskFlag: false,
        taskNotes: "none",
        createAt: "",
        updateAt: "",
        parentId: parentId,
      })
      setValue("")
    }
  }

  return (
    <Row className="of-hidden py-sm">
      <TaskSimpleFormWrapper>
        <Col span="auto" className="pr-md">
          <Button icon={<AiFillPlusCircle />} isActive={true} />
        </Col>
        <Col span={11}>
          <Input
            autoFocus={true}
            value={value}
            onBlur={() => setValue("")}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => AddTask(e)}
          />
          <TaskSimpleFormUnderline />
        </Col>
      </TaskSimpleFormWrapper>
    </Row>
  )
}

export default TaskSimpleForm
