/**
 * Created by zhangqiong on 16/12/27.
 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DEL_TODO = 'DEL_TODO';
export const CLEAR_COMPLETE = 'CLEAR_COMPLETE';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const FETCH_TODOS = 'FETCH_TODOS';
export const GET_TODOS = 'GET_TODOS';
export const EDIT_STATUS = 'EDIT_STATUS';
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
export const addTodo = text => ({ type: ADD_TODO, text });
export const editStatus = id => ({ type: EDIT_STATUS, id });
export const editTodo = (text, id, edited) => ({ type: EDIT_TODO, text, id, edited });
export const completeTodo = id => ({ type: COMPLETE_TODO, id });
export const delTodo = id => ({ type: DEL_TODO, id });
export const clearComplete = () => ({ type: CLEAR_COMPLETE });
export const toggleAll = () => ({ type: TOGGLE_ALL });
export const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, filter });
export const fetchTodos = () => ({ type: FETCH_TODOS, isAPI: true });
export const getTodos = () => ({ type: GET_TODOS, isLocal: true });
