/**
 * Created by zhangqiong on 16/12/27.
 */
import { createAction } from 'redux-actions';

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

export const addTodo = createAction(ADD_TODO);
export const editStatus = createAction(EDIT_STATUS);
export const editTodo = createAction(EDIT_TODO, (text, id) => ({ text, id }));
export const completeTodo = createAction(COMPLETE_TODO);
export const delTodo = createAction(DEL_TODO);
export const clearComplete = createAction(CLEAR_COMPLETE);
export const toggleAll = createAction(TOGGLE_ALL);
export const setVisibilityFilter = createAction(SET_VISIBILITY_FILTER);
export const fetchTodos = createAction(FETCH_TODOS, () => ({ isAPI: true }));
export const getTodos = createAction(GET_TODOS, () => ({ isLocal: true }));

