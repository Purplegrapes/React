/**
 * Created by zhangqiong on 17/1/3.
 */
import { ADD_TODO, FETCH_TODOS, GET_TODOS, DEL_TODO, VisibilityFilters } from '../actions/action';

export const setLocalStroage = ({ getState }) => next => (action) => {
  if (action.type === ADD_TODO) {
    const result = next(action);
    const todos = getState().todos;
    const nowdata = todos[todos.length - 1];
    console.log(nowdata);
    const localdata = JSON.stringify(nowdata);
    const key = nowdata.id;
    console.log(todos[todos.length - 1].id);
    localStorage.setItem(key, localdata);
    return result;
  }
  else if (action.type === DEL_TODO) {
    localStorage.removeItem(action.id);
  }
  return next(action);
}
export const getLocalStorage = () => next => (action) => {
  if (action.isLocal) {
    for (let i = 0; i < localStorage.length; i++) {
      const data = JSON.parse(localStorage.getItem(localStorage.key(i)));
      console.log(data);
      const todo = { data, type: GET_TODOS };
      next(todo);
    }
  } else {
    return next(action);
  }
}
