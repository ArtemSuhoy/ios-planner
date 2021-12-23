import { Col, Row, Button, Input } from "../../../../components"
import { AiFillPlusCircle } from "react-icons/ai"
import { TaskSimpleFormWrapper, TaskSimpleFormUnderline } from "."
const TaskSimpleForm = () => {
  return (
    <Row className="of-hidden py-sm">
      <TaskSimpleFormWrapper>
        <Col span="auto" className="pr-md">
          <Button icon={<AiFillPlusCircle />} isActive={true} />
        </Col>
        <Col span={11}>
          <Input />
          <TaskSimpleFormUnderline />
        </Col>
      </TaskSimpleFormWrapper>
    </Row>
  )
}

export default TaskSimpleForm
