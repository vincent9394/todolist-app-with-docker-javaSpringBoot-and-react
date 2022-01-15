import { ActionTypes } from "../reducers/Constants";

export const initTodoList = (response) => ({
  type: ActionTypes.INIT_TODOLIST,
  payload: response.data,
});

export const addTodoList = (response) => ({
  type: "todo/add",
  payload: response.data,
});

export const updateTodoList = (response) => ({
  type: "todo/updateStatus",
  payload: response.data,
});

export const deleteTodoList = (id) => ({
  type: "todo/delete",
  payload: id,
});
