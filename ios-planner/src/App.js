import { Button } from "./components/Button"
import { Text } from "./components/Text"
import { Title } from "./components/Title"
import { Switcher } from "./components/Switcher"
import { IconModule } from "./components/IconModule"
import { Input } from "./components/Input"
import { Checkbox } from "./components/Checkbox"
import { Container } from "./components/Grid/Container"
import { Row } from "./components/Grid/Row"
import { Col } from "./components/Grid/Col"
import { AiOutlineUnorderedList, AiOutlineSearch } from "react-icons/ai"
import { BsCircle, BsFlagFill } from "react-icons/bs"

const App = () => {
  /*Attributes: 
    Button: icon, children
    Button: size -> sm, md, lg
            type -> hovered
            type -> active
     */
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        {/* Button */}
        <div>
          <Button size="sm" isHovered={true}>
            sm hovered
          </Button>

          <Button size="sm" isActive={true}>
            sm active
          </Button>

          <Button size="sm" isActive={true} isHovered={true}>
            sm hovered-active
          </Button>

          <Button isHovered={true}>default hovered</Button>
          <Button isActive={true}>default active</Button>
          <Button isHovered={true} isActive={true}>
            default hovered-active
          </Button>

          <Button size="lg" isHovered={true}>
            lg hovered
          </Button>

          <Button size="lg" isActive={true}>
            lg active
          </Button>

          <Button size="lg" isActive={true} isHovered={true}>
            lg hovered-active
          </Button>

          <Button size="xl" isHovered={true}>
            Extra large
          </Button>
          <Button size="xl" isActive={true}>
            Extra large
          </Button>
          <Button size="xl" isHovered={true} isActive={true}>
            Extra large hovered-false
          </Button>
        </div>

        {/* Title */}
        <div>
          <Title level={1}>h1</Title>
          <Title level={2}>h2</Title>
          <Title level={3}>h3</Title>
          <Title>Default title</Title>
          <Title level={5}>h5</Title>
        </div>

        {/* Icon */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <IconModule size="lg" variant="danger">
            <AiOutlineUnorderedList />
          </IconModule>
          <IconModule size="md" variant="warning">
            <AiOutlineUnorderedList />
          </IconModule>
          <IconModule>
            <AiOutlineUnorderedList />
          </IconModule>
          <IconModule size="sm" variant="light">
            <AiOutlineUnorderedList />
          </IconModule>
        </div>

        {/*Text*/}
        <div style={{ padding: "0px 10px" }}>
          <Text size="xl">Extra large</Text>
          <Text size="lg">Large</Text>
          <Text>default</Text>
          <Text size="sm">Small</Text>
        </div>

        {/* Input */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <div>Ниже default input</div>
            <Input />
          </div>
          <Input
            type="search"
            placeholder="Search"
            icon={<AiOutlineSearch />}
          />

          <Input type="addTask" />
        </div>

        {/* Checkbox */}
        <div>
          <Checkbox icon={true} />
        </div>
      </div>

      <Container size="lg">
        <Row>
          <Col xl={2} md={3}>
            1.1
          </Col>
          <Col xl={2} md={3}>
            1.2
          </Col>
          <Col xl={4} md={3}>
            1.3
          </Col>
          <Col xl={4} md={3}>
            1.4
          </Col>
        </Row>
        <Row>
          <Col>2.1</Col>
          <Col>2.2</Col>
          <Col>2.3</Col>
          <Col>2.4</Col>
        </Row>
        <Row>
          <Col>3.1</Col>
          <Col>3.2</Col>
          <Col>3.3</Col>
          <Col>3.4</Col>
        </Row>
      </Container>
      <Switcher counter="5" title="All" icons={<BsFlagFill />} />
    </div>
  )
}

export default App
