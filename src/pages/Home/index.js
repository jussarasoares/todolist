import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import List from '../../components/List';
import Task from '../../components/Task';
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
            <List title="Mercado">
              <Task title="Arroz" />
            </List>
            <List title="Trabalho">
              <Task title="Reunião" />
            </List>
            <Button>Adicionar lista</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
