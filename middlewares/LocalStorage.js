/**
 * Created by zhangqiong on 17/1/3.
 */
import {
  ADD_TODO,
  FETCH_TODOS,
  TOGGLE_ALL,
  CLEAR_COMPLETE,
  GET_TODOS,
  DEL_TODO,
  COMPLETE_TODO,
} from '../actions/action';

export const setLocalStroage = ({ getState }) => next => (action) => {
  switch (action.type) {

    case DEL_TODO: {
      const result = next(action);
      localStorage.removeItem(action.id);
      return result;
    }
    case CLEAR_COMPLETE: {
      const result = next(action);
      console.log(action);
      for (let i = 0; i < localStorage.length; i++) {
        const data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (data.completed) {
          localStorage.removeItem(data.id);
        }
      }
      return result;
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
}
export const getLocalStorage = () => next => (action) => {
  if (action.isLocal) {
    for (let i = 0; i < localStorage.length; i++) {
      const data = JSON.parse(localStorage.getItem(localStorage.key(i)));
      const todo = { data, type: GET_TODOS };
      next(todo);
    }
  } else {
    return next(action);
  }
}
