import {
  Button,
  ButtonGroup,
  Col,
  Form,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { BsPencilSquare, BsX } from 'react-icons/bs';

const Task = ({ title }) => {
  return (
    <ListGroup.Item className="list__item--task">
      <Row>
        <Col>
          <Form>
            <Form.Check custom inline label={title} />
          </Form>
        </Col>
        <Col className="list__item">
          <ButtonGroup>
            <Button variant="secondary" className="list__button">
              <BsPencilSquare color="black" fontSize={15} />
            </Button>
            <Button variant="secondary" className="list__button">
              <BsX color="black" fontSize={20} />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default Task;
