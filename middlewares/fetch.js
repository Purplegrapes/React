/**
 * Created by zhangqiong on 16/12/30.
 */
import 'whatwg-fetch';
import { FETCH_TODOS } from '../actions/action';

export const fetchRender = () => next => (action) => {
  if (action.isAPI) {
    return fetch('http://192.168.1.108:8889/todos')
      .then(res => res.json())
      .then((data) => {
        const todo = { data, type: FETCH_TODOS };
        console.log(todo.data);
        next(todo);
      });
  }
  return next(action);
}
export const logger = ({ getState }) => next => (action) => {
  console.log('dispatching', action)
  const result = next(action);
  console.log('next state', getState())
  return result;
}
