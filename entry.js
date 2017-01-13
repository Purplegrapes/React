/**
 * Created by zhangqiong on 16/12/21.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import App from './containers/App';
import todoApp from './reducers/reducer';
import { getTodos } from './actions/action';
import { fetchRender } from './middlewares/fetch';
import { getLocalStorage, setLocalStroage } from './middlewares/LocalStorage';

const routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: App },
    childRoutes: [
      { path: 'all', component: App },
      { path: 'active', component: App },
      { path: 'completed', component: App },
    ],
  },
];
const Logger = createLogger();
const store = createStore(
  todoApp,
  applyMiddleware(Logger, fetchRender, setLocalStroage, getLocalStorage),
);

// store.dispatch(fetchTodos());
store.dispatch(getTodos());
ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routeConfig} />
  </Provider>, document.getElementsByClassName('todoapp')[0]);
