import { useState } from 'react';
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
import { BsPlus, BsTrash, BsCheck, BsPencilSquare } from 'react-icons/bs';
import './style.css';

const List = ({ data, onCreateTask, onEditList, onDeleteList, children }) => {
  const [done, setDone] = useState(data.done || false);
  const [title, setTitle] = useState(data.title);
  const [isEdit, setIsEdit] = useState(false);
  const [task, setTask] = useState('');
  const [isAdd, setIsAdd] = useState(false);

  const onUpdateList = async () => {
    await onEditList({ ...data, title });
    setIsEdit(false);
  };

  const onCheckedList = async (e) => {
    setDone(e.target.checked);
    await onEditList({ ...data, done: e.target.checked });
  };

  const onNewTask = async () => {
    await onCreateTask({ title: task, listId: data.id });
    setTask('');
    setIsAdd(false);
  };

  return (
    <ListGroup>
      <ListGroup.Item>
        {!isEdit && (
          <Row>
            <Col>
              <Form>
                <Form.Check
                  inline
                  label={data.title}
                  className={data.done ? 'list__done' : ''}
                  onChange={onCheckedList}
                  checked={done}
                />
              </Form>
            </Col>
            <Col className="list__item">
              <ButtonGroup>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Criar nova task</Tooltip>}
                >
                  <Button
                    variant="outline-secondary"
                    onClick={() => setIsAdd(true)}
                  >
                    <BsPlus color="black" fontSize={20} />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Editar título da lista</Tooltip>}
                >
                  <Button
                    variant="outline-secondary"
                    onClick={() => setIsEdit(true)}
                  >
                    <BsPencilSquare color="black" fontSize={15} />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Apagar lista</Tooltip>}
                >
                  <Button
                    variant="outline-secondary"
                    onClick={() => onDeleteList(data.id)}
                  >
                    <BsTrash color="black" fontSize={15} />
                  </Button>
                </OverlayTrigger>
              </ButtonGroup>
            </Col>
          </Row>
        )}
        {isEdit && (
          <InputGroup className="list__input">
            <FormControl
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <InputGroup.Append>
              <Button variant="success" onClick={onUpdateList}>
                <BsCheck fontSize={20} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        )}
        {children}
        {isAdd && (
          <InputGroup className="list__input">
            <FormControl
              placeholder="Adicione uma tarefa"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <InputGroup.Append>
              <Button
                variant="success"
                disabled={task === ''}
                onClick={onNewTask}
              >
                <BsCheck fontSize={20} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        )}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default List;
