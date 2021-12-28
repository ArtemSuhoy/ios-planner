import { Col, Row, IconModule, Text, Input, Counter, Button } from "components/"
import { useCategoryMode } from "./Hooks"
import { useContext, useState } from "react"
import { AiOutlineUnorderedList, AiOutlineClose } from "react-icons/ai"
import { CategoryCombinedViewWrapper } from "."
import { PlannerContext } from "contexts/Planner"
const CategoryCombinedView = props => {
  const { children, id } = props
  const { categoryMode, setCategoryMode } = useCategoryMode()
  const [inputValue, setInputValue] = useState()
  const { deleteTaskList, updateTaskList, setCurrentCategory, state } =
    useContext(PlannerContext)

  const updateTaskListText = e => {
    if (e.key === "Enter") {
      setCategoryMode(true)
      return updateTaskList(id, inputValue)
    }
  }

  const taskCounter = () => {
    let i = 0
    state.tasks.map(item => item.parentId === id && i++)
    return i
  }
  return (
    <Row>
      <CategoryCombinedViewWrapper>
        <Col>
          <Row className="ai-center">
            <Col span="auto" className="pr-none">
              <IconModule
                onClick={() =>
                  setCurrentCategory({
                    id,
                    name: children,
                  })
                }>
                <AiOutlineUnorderedList />
              </IconModule>
            </Col>

            <Col>
              {categoryMode ? (
                <Text onDoubleClick={() => setCategoryMode(!categoryMode)}>
                  {children}
                </Text>
              ) : (
                <Input
                  type="addTaskList"
                  autoFocus={true}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={e => updateTaskListText(e)}
                  onBlur={() => {
                    setCategoryMode(!categoryMode)
                  }}
                />
              )}
            </Col>
          </Row>
        </Col>

        <Col span="auto" className="d-flex ai-center">
          <Counter className="gray-lighten1">{taskCounter()}</Counter>
          <Button
            icon={<AiOutlineClose />}
            size="sm"
            className="p-none"
            onClick={() => {
              setCurrentCategory(false)
              deleteTaskList(id)
            }}
          />
        </Col>
      </CategoryCombinedViewWrapper>
    </Row>
  )
}

export default CategoryCombinedView
