import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  ListGroup,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap';
import { BsPlus, BsTrash, BsX } from 'react-icons/bs';
import './style.css';

const Home = () => {
  return (
    <>
      <Navbar expand="lg" className="list__navbar">
        <Container>
          <Navbar.Brand>Lista de Tarefas</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Nav fill variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link className="list__tab">Ativas</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="list__tab">Concluídas</Nav.Link>
              </Nav.Item>
            </Nav>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Form>
                      <Form.Check custom inline label="Mercado" />
                    </Form>
                  </Col>
                  <Col className="list__item">
                    <ButtonGroup>
                      <Button className="list__button">
                        <BsPlus color="black" fontSize={20} />
                      </Button>
                      <Button className="list__button">
                        <BsTrash color="black" fontSize={15} />
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
                <ListGroup.Item>
                  <Row>
                    <Col>Arroz</Col>
                    <Col className="list__item">
                      <Button className="list__button">
                        <BsX color="black" fontSize={15} />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Form>
                      <Form.Check custom inline label="Trabalho" />
                    </Form>
                  </Col>
                  <Col className="list__item">
                    <ButtonGroup aria-label="Basic example">
                      <Button className="list__button">
                        <BsPlus color="black" fontSize={20} />
                      </Button>
                      <Button className="list__button">
                        <BsTrash color="black" fontSize={15} />
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
                <ListGroup.Item>
                  <Row>
                    <Col>Reunião</Col>
                    <Col className="list__item">
                      <Button className="list__button">
                        <BsX color="black" fontSize={15} />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
