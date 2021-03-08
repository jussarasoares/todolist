import {
  Button,
  ButtonGroup,
  Col,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { BsPlus, BsTrash } from 'react-icons/bs';

const List = ({ title, children }) => {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Row>
          <Col>
            <Form>
              <Form.Check custom inline label={title} />
            </Form>
          </Col>
          <Col className="list__item">
            <ButtonGroup>
              <Button variant="outline-secondary">
                <BsPlus color="black" fontSize={20} />
              </Button>
              <Button variant="outline-secondary">
                <BsTrash color="black" fontSize={15} />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        {children}
        <InputGroup className="list__input">
          <FormControl placeholder="Adicione uma tarefa" />
          <InputGroup.Append>
            <Button variant="secondary">
              <BsPlus fontSize={20} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default List;
