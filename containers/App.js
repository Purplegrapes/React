/**
 * Created by zhangqiong on 16/12/27.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AddTodo from '../component/AddTodo';
import MainSection from '../component/MainSection';
import TodoFooter from '../component/TodoFooter';
import '../main.css';
import {
  addTodo as addTodoAction,
  editTodo as editTodoAction,
  completeTodo as completeTodoAction,
  delTodo as delTodoAction,
  clearComplete as clearCompleteAction,
  toggleAll as toggleAllAction,
  setVisibilityFilter as setVisibilityFilterAction,
  VisibilityFilters,
} from '../actions/action';

class App extends Component {
  static propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.number,
      text: PropTypes.string,
      complete: PropTypes.bool,
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
      'SHOW_ALL',
      'SHOW_COMPLETED',
      'SHOW_ACTIVE',
    ]).isRequired,

    addTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
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
const selectTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.complete);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.complete);
    default :
      return todos;
  }
};

// 这里的 state 是 Connect 的组件的
const select = state => ({
  visibleTodos: selectTodos(state.todos, state.visibilityFilter),
  visibilityFilter: state.visibilityFilter,
});

export default connect(select, {
  addTodo: addTodoAction,
  editTodo: editTodoAction,
  completeTodo: completeTodoAction,
  delTodo: delTodoAction,
  clearComplete: clearCompleteAction,
  toggleAll: toggleAllAction,
  setVisibilityFilter: setVisibilityFilterAction,
})(App);
