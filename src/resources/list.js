import api from './api';

export const findLists = async () => {
  return await api.get('/lists');
};

export const saveList = async (values) => {
  if (values.id) {
    return await api.put(`/lists/${values.id}`, values);
  }
  return await api.post('/lists', values);
};

export const removeList = async (id) => {
  return await api.delete(`/lists/${id}`);
};
