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
  addTodo,
  editTodo,
  completeTodo,
  delTodo,
  clearComplete,
  toggleAll,
  setVisibilityFilter,
  VisibilityFilters
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
  };

  render() {
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))
          }
        />
        <MainSection
          todos={visibleTodos}
          editTodo={(text, id) =>
            dispatch(editTodo(text, id))
          }
          onTodoClick={id =>
            dispatch(completeTodo(id))
          }
          delTodo={id =>
            dispatch(delTodo(id))
          }
          toggleTodo={() =>
            dispatch(toggleAll())}
        />
        <TodoFooter
          filter={visibilityFilter}
          todos={visibleTodos}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          }
          clearComplete={() =>
            dispatch(clearComplete())}
        />
      </div>
    );
  }
}
function selectTodos(todos, filter) {
  console.log(todos)
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
}

// 这里的 state 是 Connect 的组件的
function select(state) {
  console.log(state)
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
  };
}

export default connect(select)(App);
