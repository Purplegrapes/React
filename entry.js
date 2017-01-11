/**
 * Created by zhangqiong on 16/12/21.
 */
import React from 'react';
import 'babel-polyfill';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers/reducer';
import { fetchTodos, getTodos } from './actions/action';
import { fetchRender } from './middlewares/fetch';
import { getLocalStorage, setLocalStroage } from './middlewares/LocalStorage';

const Logger = createLogger();
const store = createStore(
  todoApp,
  applyMiddleware(Logger, fetchRender, setLocalStroage, getLocalStorage),
);

store.dispatch(fetchTodos());
store.dispatch(getTodos());
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementsByClassName('todoapp')[0]);
