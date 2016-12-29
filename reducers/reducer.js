/**
 * Created by zhangqiong on 16/12/27.
 */
import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, DEL_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/action';

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
    case ADD_TODO:
      return [
        ...todos,
        todos.length !== 0 ? {
            id: Math.max(...(todos.map(item => item.id))) + 1,
            text: action.text,
            complete: false,
          } : {
            id: 0,
            text: action.text,
            complete: false,
          }]
    case COMPLETE_TODO: {
      return todos.map((t) => {
          if (t.id !== action.id) {
            return t;
          } else {
            return Object.assign({}, t, {
              completed: !t.completed,
            });
          }
        },
      );
    }
    case DEL_TODO: {
      return todos.filter(todo => todo.id !== action.id);
    }
    default:
      return todos;
  }
}
const todoApp = combineReducers({
  visibilityFilter,
  todos: todosReducer,
})

export default todoApp;
