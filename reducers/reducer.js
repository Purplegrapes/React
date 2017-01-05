/**
 * Created by zhangqiong on 16/12/27.
 */
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  ADD_TODO,
  EDIT_TODO,
  EDIT_STATUS,
  COMPLETE_TODO,
  DEL_TODO,
  CLEAR_COMPLETE,
  TOGGLE_ALL,
  FETCH_TODOS,
  GET_TODOS,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from '../actions/action';

const { SHOW_ALL } = VisibilityFilters;

const visibilityFilter = handleActions({
  [SET_VISIBILITY_FILTER]: (state, action) => action.payload,
}, { SHOW_ALL })
const todosReducer = handleActions({
  [GET_TODOS]: (todos, action) => [...todos, action.data],
  [FETCH_TODOS]: (todos, action) => [...todos, ...action.data],
  [ADD_TODO]: (todos, action) => {
    const payload = action.payload;
    return [
      ...todos,
      todos.length === 0
        ? {
          id: 0,
          text: payload,
          completed: false,
          edited: false,
        } : {
          id: Math.max(...(todos.map(item => item.id))) + 1,
          text: payload,
          completed: false,
          edited: false,
        }];
  },
  [COMPLETE_TODO]: (todos, action) => todos.map((t) => {
    if (t.id !== action.payload) {
      return t;
    }
    return {
      ...t,
      completed: !t.completed,
    };
  }),
  [DEL_TODO]: (todos, action) => todos.filter(todo => todo.id !== action.payload),
  [CLEAR_COMPLETE]: (todos = []) => todos.filter(todo => todo.completed === false),
  [TOGGLE_ALL]: (todos = []) => {
    const areAllMarked = todos.every(todo => todo.completed);
    return todos.map(todo => ({
      ...todo,
      completed: !areAllMarked,
    }));
  },
  [EDIT_TODO]: (todos, action) => todos.map((t) => {
    if (t.id !== action.payload.id) {
      return t;
    }
    return {
      ...t,
      text: action.payload.text,
      edited: false,
    };
  }),
  [EDIT_STATUS]: (todos, action) => todos.map((t) => {
    if (t.id !== action.payload) {
      return t;
    }
    return {
      ...t,
      edited: true,
    };
  }),
}, []);
const todoApp = combineReducers({
  visibilityFilter,
  todos: todosReducer,
})

export default todoApp;
