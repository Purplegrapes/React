/**
 * Created by zhangqiong on 16/12/27.
 */
import { combineReducers } from 'redux';
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

const { SHOW_ALL } = VisibilityFilters
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
const todosReducer = (todos = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return [...todos, action.data];
    case FETCH_TODOS:
      return [...todos, ...action.data];
    case ADD_TODO:
      return [
        ...todos,
        todos.length !== 0
          ? {
            id: Math.max(...(todos.map(item => item.id))) + 1,
            text: action.text,
            completed: false,
            edited: false,
          } : {
            id: 0,
            text: action.text,
            completed: false,
            edited: false,
          }];
    case COMPLETE_TODO: {
      return todos.map((t) => {
        if (t.id !== action.id) {
          return t;
        }
        return {
          ...t,
          completed: !t.completed,
        };
      });
    }
    case DEL_TODO: {
      return todos.filter(todo => todo.id !== action.id);
    }
    case CLEAR_COMPLETE: {
      return todos.filter(todo => todo.completed === false);
    }
    case TOGGLE_ALL: {
      const areAllMarked = todos.every(todo => todo.completed);
      return todos.map(todo => ({
        ...todo,
        completed: !areAllMarked,
      }));
    }
    case EDIT_TODO:
      return todos.map((t) => {
        if (t.id !== action.id) {
          return t;
        }
        return {
          ...t,
          text: action.text,
          edited: false,
        };
      });
    case EDIT_STATUS:
      return todos.map((t) => {
        if (t.id !== action.id) {
          return t;
        }
        return {
          ...t,
          edited: true,
        };
      });
    default:
      return todos;
  }
}
const todoApp = combineReducers({
  visibilityFilter,
  todos: todosReducer,
})

export default todoApp;
