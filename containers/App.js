/**
 * Created by zhangqiong on 16/12/27.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { prop, filter } from 'lodash/fp';
import AddTodo from '../component/AddTodo';
import MainSection from '../component/MainSection';
import TodoFooter from '../component/TodoFooter';
import '../main.css';
import {
  addTodo as addTodoAction,
  editTodo as editTodoAction,
  editStatus as editStatusAction,
  completeTodo as completeTodoAction,
  delTodo as delTodoAction,
  clearComplete as clearCompleteAction,
  toggleAll as toggleAllAction,
  setVisibilityFilter as setVisibilityFilterAction,
  VisibilityFilters,
} from '../actions/action';

class App extends Component {
  static propTypes = {
    visibleTodos: PropTypes.array.isRequired,
    visibilityFilter: PropTypes.oneOf([
      'SHOW_ALL',
      'SHOW_COMPLETED',
      'SHOW_ACTIVE',
    ]).isRequired,

    addTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    editStatus: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    clearComplete: PropTypes.func.isRequired,
    toggleAll: PropTypes.func.isRequired,
    setVisibilityFilter: PropTypes.func.isRequired,
  };

  render() {
    const {
      visibleTodos,
      visibilityFilter,
      addTodo,
      editStatus,
      editTodo,
      completeTodo,
      delTodo,
      clearComplete,
      toggleAll,
      setVisibilityFilter,
    } = this.props;

    return (
      <div>
        <AddTodo
          onAddClick={addTodo}
        />
        <MainSection
          todos={visibleTodos}
          editTodo={editTodo}
          editStatus={editStatus}
          onTodoClick={completeTodo}
          delTodo={delTodo}
          toggleTodo={toggleAll}
        />
        <TodoFooter
          filter={visibilityFilter}
          todos={visibleTodos}
          onFilterChange={setVisibilityFilter}
          clearComplete={clearComplete}
        />
      </div>
    );
  }
}
const selectTodos = (todos, filters) => {
  switch (filters) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return filter(todo => prop('completed')(todo))(todos);
    case VisibilityFilters.SHOW_ACTIVE:
      return filter(todo => !prop('completed')(todo))(todos);
    default :
      return todos;
  }
};

// 这里的 state 是 Connect 的组件的
const select = state => ({
  visibleTodos: selectTodos(prop('todos')(state), prop('visibilityFilter')(state)),
  visibilityFilter: prop('visibilityFilter')(state),
});

export default connect(select, {
  addTodo: addTodoAction,
  editTodo: editTodoAction,
  editStatus: editStatusAction,
  completeTodo: completeTodoAction,
  delTodo: delTodoAction,
  clearComplete: clearCompleteAction,
  toggleAll: toggleAllAction,
  setVisibilityFilter: setVisibilityFilterAction,
})(App);
