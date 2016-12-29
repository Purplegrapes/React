/**
 * Created by zhangqiong on 16/12/27.
 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DEL_TODO = 'DEL_TODO';
export const CLEAR_COMPLETE = 'CLEAR_COMPLETE';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
export const addTodo = text => ({ type: ADD_TODO, text });
export const completeTodo = id => ({ type: COMPLETE_TODO, id });
export const delTodo = id => ({ type: DEL_TODO, id });
export const clearComplete = () => ({ type: CLEAR_COMPLETE });
export const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, filter });
