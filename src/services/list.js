import { findLists, saveList, removeList } from '../resources/list';
import { findTasks, saveTask } from '../resources/task';

export const getAllLists = async () => {
  try {
    const { data } = await findLists();

    const lists = [];
    for (let i = 0; i < data.length; i++) {
      const response = await findTasks(data[i].id);
      lists.push({ ...data[i], tasks: response.data });
    }

    return { data: lists, error: false };
  } catch (e) {
    return { data: [], error: true };
  }
};

export const createList = async (title) => {
  try {
    const { data } = await saveList({ title });
    return { data: { ...data, tasks: [] }, error: false };
  } catch (e) {
    return { data: {}, error: true };
  }
};

export const updateList = async (values) => {
  try {
    const { tasks, ...rest } = values;
    const { data } = await saveList(rest);
    let upTasks = tasks;
    if (data.done) {
      upTasks = tasks.map((task) => {
        const upTask = { ...task, done: true };
        saveTask(upTask);
        return upTask;
      });
    }
    return { data: { ...data, tasks: upTasks }, error: false };
  } catch (e) {
    return { data: {}, error: true };
  }
};

export const deleteList = async (id) => {
  try {
    await removeList(id);
    return { error: false };
  } catch (e) {
    return { error: true };
  }
};
