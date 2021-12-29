import { HeaderWrapper } from "."
import { Row, Col, Text, Title, Button } from "../"
import { AiOutlinePlus } from "react-icons/ai"
const Header = props => {
  const { children, counter, color } = props
  return (
    <Row>
      <Col>
        <HeaderWrapper>
          <Row>
            <Col className="jc-end d-flex p-ms">
              <Button
                size="sm"
                isHovered={true}
                isActive={true}
                icon={<AiOutlinePlus />}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Title level={1} className="fw-bold" color={color}>
                {children}
              </Title>
            </Col>
          </Row>

          <Row className="ai-center jc-spaceBetween">
            <Col span="3">
              <Text size="md">{counter} выполнены</Text>
            </Col>

            <Col span="auto">
              <Button size="md" color={color}>
                Show
              </Button>
            </Col>
          </Row>
        </HeaderWrapper>
      </Col>
    </Row>
  )
}

export default Header
