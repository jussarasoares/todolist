import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { BsX } from 'react-icons/bs';

const Task = ({ title }) => {
  return (
    <ListGroup.Item>
      <Row>
        <Col>
          <Form>
            <Form.Check custom inline label={title} />
          </Form>
        </Col>
        <Col className="list__item">
          <Button className="list__button">
            <BsX color="black" fontSize={15} />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default Task;
