/**
 * Created by zhangqiong on 16/12/21.
 */
import React, { Component }from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createAction } from 'redux-actions';
import App from './containers/App';
import todoApp from './reducers/reducer';

const store = createStore(
  todoApp,
  applyMiddleware(thunk,createLogger(),promiseMiddleware),
);
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementsByClassName('todoapp')[0]);
