/**
 * Created by zhangqiong on 16/12/27.
 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
export const addTodo = text => ({ type: ADD_TODO, text });
export const completeTodo = id => ({ type: COMPLETE_TODO, id });
export const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, filter });