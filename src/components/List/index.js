import {
  Button,
  ButtonGroup,
  Col,
  Form,
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
              <Button className="list__button">
                <BsPlus color="black" fontSize={20} />
              </Button>
              <Button className="list__button">
                <BsTrash color="black" fontSize={15} />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        {children}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default List;
