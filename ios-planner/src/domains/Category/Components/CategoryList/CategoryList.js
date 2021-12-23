import { useContext } from "react"
import { Row, Col, Button, Title } from "components/"
import { CategoryCombinedView } from "./../CategoryCombinedView"
import { CategoryForm } from "../CategoryForm"
import { useEditCategoryFormVisible } from "./Hooks"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { PlannerContext } from "contexts/Planner"

const CategoryList = () => {
  const { categoryFormVisible, setCategoryFormVisible } =
    useEditCategoryFormVisible()

  const { state } = useContext(PlannerContext)
  return (
    <Row className="height-100">
      <Col className="d-flex fd-column">
        <Row>
          <Col className="px-xxl">
            <Title level={6} color="--gray-lighten1" className="fw-bold">
              My lists
            </Title>
          </Col>
        </Row>

        <Row fd-column="1" className="flex-1 fd-column">
          <Col className="px-xxl">
            {state.map(item => (
              <CategoryCombinedView
                formVisible={setCategoryFormVisible}
                id={item.id}>
                {item.name}
              </CategoryCombinedView>
            ))}

            {categoryFormVisible && (
              <CategoryForm setFormVisible={setCategoryFormVisible} />
            )}
          </Col>
          <Col span={1}>
            <Button
              size="sm"
              className="fw-bold"
              icon={<AiOutlinePlusCircle />}
              isActive={true}
              onClick={() => setCategoryFormVisible(!categoryFormVisible)}>
              New list
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default CategoryList
