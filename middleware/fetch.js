/**
 * Created by zhangqiong on 16/12/30.
 */
import 'whatwg-fetch';
import React, { Component, PropTypes } from 'react';
import { FETCH_TODOS } from '../actions/action';

export const fetchRender = ({ dispatch }) => next => (action) => {
  if (action.isAPI) {
    return fetch('http://192.168.1.108:8889/todos')
      .then(res => res.json())
      .then((data) => {
        const todo = { data, type: FETCH_TODOS };
        console.log(todo);
        next(todo);
      });
  }
  next(action);
}
export const logger = ({ getState }) => next => (action) => {
  console.log('dispatching', action)
  const result = next(action);
  console.log('next state', getState())
  return result;
}
