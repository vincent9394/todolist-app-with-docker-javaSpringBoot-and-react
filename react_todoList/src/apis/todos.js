import api from "./api";

export const getAllTodos = () => {
  return api.get(`/todos`);
};

export const createTodo = (todo) => {
  return api.post("/todos", todo);
};

export const updateTodo = (todo) => {
  return api.put(`/todos/${todo.id}`, todo);
};

export const deleteTodo = (id) => {
  return api.delete(`/todos/${id}`);
};

export const getPage = (page = 1, size = 2) => {
  return api.get(`/todos?page=${page}&size=${size}`);
};
