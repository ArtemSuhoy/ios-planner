import { useState, useContext } from "react"
import { v4 as uuidv4 } from "uuid"
import { Col, Row, IconModule, Input, Counter } from "components/"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { CategoryFormWrapper } from "."

import { PlannerContext } from "contexts/Planner"

const CategoryForm = props => {
  const { setFormVisible } = props
  const { createTaskList } = useContext(PlannerContext)
  const [categoryName, setCategoryName] = useState()

  const AddTaskListTitle = e => {
    if (e.key === "Enter") {
      setFormVisible(false)
      return createTaskList({
        taskListId: uuidv4(),
        taskListName: categoryName,
        tasks: [],
        createdAt: "1",
        updatedAt: "1",
      })
    }
  }

  return (
    <Row>
      <CategoryFormWrapper>
        <Col>
          <Row className="ai-center">
            <Col span="auto" className="pr-none">
              <IconModule {...props}>
                <AiOutlineUnorderedList />
              </IconModule>
            </Col>
            <Col>
              <Input
                type="addTaskList"
                autoFocus="active"
                onChange={e => setCategoryName(e.target.value)}
                onKeyDown={e => AddTaskListTitle(e)}
                onBlur={() => setFormVisible(false)}
              />
            </Col>
          </Row>
        </Col>
        <Col span="auto" className="px-ms d-flex ai-center">
          <Counter size="md" className="gray-lighten1">
            0
          </Counter>
        </Col>
      </CategoryFormWrapper>
    </Row>
  )
}

export default CategoryForm
