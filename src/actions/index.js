import { ADD_TODO, DELETE_TODO } from "../constants/action-tyes";

export const addTodo = (data) => ({
  type: ADD_TODO,
  payload: data,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
