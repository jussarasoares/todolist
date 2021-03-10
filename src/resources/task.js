import api from './api';

export const findTasks = async (listId) => {
  return await api.get(`/tasks?listId=${listId}`);
};

export const saveTask = async (values) => {
  if (values.id) {
    return await api.put(`/tasks/${values.id}`, values);
  }
  return await api.post('/tasks', values);
};

export const removeTask = async (id) => {
  return await api.delete(`/tasks/${id}`);
};
