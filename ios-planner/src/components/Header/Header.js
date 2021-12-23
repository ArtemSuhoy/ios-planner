import { HeaderWrapper } from "."
import { Row, Col, Text, Title, Button } from "../"
import { AiOutlinePlus } from "react-icons/ai"
const Header = () => {
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
              <Title level={1} color="--gray-default" className="fw-bold">
                All
              </Title>
            </Col>
          </Row>

          <Row className="ai-center jc-spaceBetween">
            <Col span="3">
              <Text size="md">0 выполнены</Text>
            </Col>

            <Col span="auto">
              <Button size="md">Show</Button>
            </Col>
          </Row>
        </HeaderWrapper>
      </Col>
    </Row>
  )
}

export default Header
