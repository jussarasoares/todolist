import { useState, useEffect } from 'react';
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
import { toast } from 'react-toastify';
import List from '../../components/List';
import Task from '../../components/Task';
import {
  createList,
  deleteList,
  getAllLists,
  updateList,
} from '../../services/list';
import { createTask, updateTask, deleteTask } from '../../services/task';
import './style.css';

const Home = () => {
  const [lists, setLists] = useState([]);
  const [list, setList] = useState('');
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('active');

  useEffect(() => {
    const exec = async () => {
      const { data, error } = await getAllLists();
      if (error) {
        toast.error('Mensagem de error');
        setLoading(false);
        return;
      }
      setLists(data);
      setLoading(false);
    };

    exec();
  }, []);

  const onChangeTab = (value) => {
    setTab(value);
  };

  const filterTab = (list) => {
    return (
      (tab === 'active' && !list.done) || (tab === 'completed' && list.done)
    );
  };

  const onCreateList = async () => {
    const { data, error } = await createList(list);
    if (error) {
      toast.error('Falha ao criar a lista.');
      return;
    }
    setLists((state) => {
      state.push(data);
      return [...state];
    });
    setList('');
    toast.success('Lista criada com sucesso.');
  };

  const onEditList = async (values) => {
    const { data, error } = await updateList(values);
    if (error) {
      toast.error('Falha ao atualizar a lista.');
      return;
    }
    setLists((state) => state.map((s) => (s.id === data.id ? data : s)));
    toast.success('Lista atualizada com sucesso.');
  };

  const onDeleteList = async (id) => {
    const { error } = await deleteList(id);
    if (error) {
      toast.error('Falha ao deletar a lista.');
      return;
    }
    setLists((state) => state.filter((item) => item.id !== id));
    toast.success('Lista deletada com sucesso.');
  };

  const onCreateTask = async (values) => {
    const { data, error } = await createTask(values);
    if (error) {
      toast.error('Falha ao criar a tarefa.');
      return;
    }
    setLists((state) =>
      state.map((s) => {
        if (s.id === data.listId) {
          const tasks = [...s.tasks];
          tasks.push(data);
          return { ...s, tasks };
        }
        return s;
      })
    );
    toast.success('Tarefa criada com sucesso.');
  };

  const onEditTask = async (values) => {
    const { data, error } = await updateTask(values);
    if (error) {
      toast.error('Falha ao atualizar a tarefa.');
      return;
    }
    setLists((state) =>
      state.map((s) => {
        if (s.id === data.listId) {
          const tasks = s.tasks.map((task) =>
            task.id === data.id ? data : task
          );
          return { ...s, tasks };
        }
        return s;
      })
    );
    toast.success('Tarefa atualizada com sucesso.');
  };

  const onDeleteTask = async (id) => {
    const { error } = await deleteTask(id);
    if (error) {
      toast.error('Falha ao deletar a tarefa.');
      return;
    }
    setLists((state) =>
      state.map((s) => {
        const tasks = s.tasks.filter((task) => task.id !== id);
        return { ...s, tasks };
      })
    );
    toast.success('Tarefa deletada com sucesso.');
  };

  return (
    <>
      <Navbar expand="lg" className="home__navbar">
        <Container>
          <Navbar.Brand>
            <BsCardChecklist className="home__navbar--icon" fontSize={25} />{' '}
            Lista de Tarefas
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <InputGroup className="home__input--list">
              <FormControl
                placeholder="Adicione uma lista de tarefas"
                onChange={(e) => setList(e.target.value)}
                value={list}
              />
              <InputGroup.Append>
                <Button
                  variant="secondary"
                  disabled={list === ''}
                  onClick={onCreateList}
                >
                  <BsPlus fontSize={20} />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            {loading && <>Carregando...</>}
            {!loading && (
              <>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link
                      className={`home__tab ${
                        tab === 'active' ? 'home__tab--active' : ''
                      }`}
                      onClick={() => onChangeTab('active')}
                    >
                      <BsCircleFill
                        className="home__icon--active"
                        fontSize={10}
                      />
                      Ativas
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className={`home__tab ${
                        tab === 'completed' ? 'home__tab--active' : ''
                      }`}
                      onClick={() => onChangeTab('completed')}
                    >
                      <BsCircleFill
                        className="home__icon--completed"
                        fontSize={10}
                      />
                      Concluídas
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                {lists.length > 0 &&
                  lists.filter(filterTab).map((list) => (
                    <List
                      key={list.id}
                      data={list}
                      onCreateTask={onCreateTask}
                      onEditList={onEditList}
                      onDeleteList={onDeleteList}
                    >
                      {list.tasks.length > 0 &&
                        list.tasks.map((task) => (
                          <Task
                            key={task.id}
                            data={task}
                            onEditTask={onEditTask}
                            onDeleteTask={onDeleteTask}
                          />
                        ))}
                    </List>
                  ))}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
