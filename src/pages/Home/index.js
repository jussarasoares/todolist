import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap';
import { BsCardChecklist, BsCircleFill, BsPlus } from 'react-icons/bs';
import List from '../../components/List';
import Task from '../../components/Task';
import './style.css';

const Home = () => {
  return (
    <>
      <Navbar expand="lg" className="list__navbar">
        <Container>
          <Navbar.Brand>
            <BsCardChecklist className="list__navbar--icon" fontSize={25} />{' '}
            Lista de Tarefas
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <InputGroup className="list__input">
              <FormControl placeholder="Adicione uma lista de tarefas" />
              <InputGroup.Append>
                <Button variant="secondary">
                  <BsPlus fontSize={20} />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav fill variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link className="list__tab">
                  <BsCircleFill className="list__icon--active" fontSize={10} />
                  Ativas
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="list__tab">
                  <BsCircleFill
                    className="list__icon--completed"
                    fontSize={10}
                  />
                  Concluídas
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <List title="Mercado">
              <Task title="Arroz" />
            </List>
            <List title="Trabalho">
              <Task title="Reunião" />
            </List>
            <Button variant="secondary" block className="list__button--delete">
              Excluir todas as listas
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
