import { saveTask, removeTask } from '../resources/task';

export const createTask = async (values) => {
  try {
    const { data } = await saveTask(values);
    return { data, error: false };
  } catch (e) {
    return { data: {}, error: true };
  }
};

export const updateTask = async (values) => {
  try {
    const { data } = await saveTask(values);
    return { data, error: false };
  } catch (e) {
    return { data: {}, error: true };
  }
};

export const deleteTask = async (id) => {
  try {
    await removeTask(id);
    return { error: false };
  } catch (e) {
    return { error: true };
  }
};
