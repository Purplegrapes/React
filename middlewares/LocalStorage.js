/**
 * Created by zhangqiong on 17/1/3.
 */
import {
  CLEAR_COMPLETE,
  GET_TODOS,
  DEL_TODO,
} from '../actions/action';

export const setLocalStroage = ({ getState }) => next => (action) => {
  switch (action.type) {
    case DEL_TODO: {
      localStorage.removeItem(action.payload);
      break;
    }
    case CLEAR_COMPLETE: {
      const nowdata = getState().todos;
      for (const todo of nowdata) {
        if (todo.completed) {
          localStorage.removeItem(todo.id);
        }
      }
      break;
    }
    default: {
      const result = next(action);
      const nowdata = getState().todos;
      for (const todo of nowdata) {
        const localdata = JSON.stringify(todo);
        localStorage.setItem(todo.id, localdata);
      }
      return result;
    }
  }
  return next(action);
};

export const getLocalStorage = () => next => (action) => {
  if (action.payload.isLocal) {
    for (let i = 0; i < localStorage.length; i++) {
      const data = JSON.parse(localStorage.getItem(localStorage.key(i)));
      const todo = { data, type: GET_TODOS };
      console.log(todo.data);
      next(todo);
    }
  } else {
    return next(action);
  }
}
