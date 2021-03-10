import { useEffect, useState } from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  OverlayTrigger,
  Row,
  Tooltip,
} from 'react-bootstrap';
import { BsCheck, BsPencilSquare, BsX } from 'react-icons/bs';
import './style.css';

const Task = ({ data, onEditTask, onDeleteTask }) => {
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setDone(data.done);
  }, [data.done]);

  const onUpdateTask = async () => {
    await onEditTask({ ...data, title });
    setIsEdit(false);
  };

  const onCheckedTask = async (e) => {
    setDone(e.target.checked);
    await onEditTask({ ...data, done: e.target.checked });
  };

  return (
    <ListGroup.Item className="task__container">
      {!isEdit && (
        <Row>
          <Col>
            <Form>
              <Form.Check
                inline
                label={data.title}
                className={data.done ? 'task__done' : ''}
                onChange={onCheckedTask}
                checked={done}
              />
            </Form>
          </Col>
          <Col className="task__item">
            <ButtonGroup>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Editar título da tarefa</Tooltip>}
              >
                <Button
                  variant="secondary"
                  className="task__button"
                  onClick={() => setIsEdit(true)}
                >
                  <BsPencilSquare color="black" fontSize={15} />
                </Button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Apagar tarefa</Tooltip>}
              >
                <Button
                  variant="secondary"
                  className="task__button"
                  onClick={() => onDeleteTask(data.id)}
                >
                  <BsX color="black" fontSize={20} />
                </Button>
              </OverlayTrigger>
            </ButtonGroup>
          </Col>
        </Row>
      )}
      {isEdit && (
        <InputGroup className="task__input">
          <FormControl
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <InputGroup.Append>
            <Button variant="success" onClick={onUpdateTask}>
              <BsCheck fontSize={20} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      )}
    </ListGroup.Item>
  );
};

export default Task;
