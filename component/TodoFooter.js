/**
 * Created by zhangqiong on 16/12/22.
 */
import React, { Component, PropTypes } from 'react';
import FilterLink from '../containers/FilterLink';

class TodoFooter extends Component {
  static propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    clearComplete: PropTypes.func,
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.number,
      text: PropTypes.string,
      completed: PropTypes.bool,
    }).isRequired).isRequired,
    filter: PropTypes.oneOf([
      'SHOW_ALL',
      'SHOW_COMPLETED',
      'SHOW_ACTIVE',
    ]).isRequired,
  };

  renderLength() {
    const { todos } = this.props;
    return todos.reduce((count, item) => item.completed ? count : count + 1, 0);
  }

  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name;
    }
    return (
      <a
        href="#/a"
        onClick={(e) => {
          e.preventDefault();
          this.props.onFilterChange(filter);
        }}
      >
        {name}
      </a>
    );
  }

  render() {
    const { todos, clearComplete } = this.props;
    const style = (todos.some(todo => todo.completed) && todos.length !== 0) ? null : { display: 'none' };
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.renderLength()}</strong>
          <span> items</span>
          <span> left</span>
        </span>
        <ul className="filters">
          <li>
            {this.renderFilter('SHOW_ALL', 'ALL')}
            <span> </span>
          </li>
          <li>
            {this.renderFilter('SHOW_ACTIVE', 'Active')}
            <span> </span>
          </li>
          <li>
            {this.renderFilter('SHOW_COMPLETED', 'Completed')}
            <span> </span>
          </li>
        </ul>
        <button style={style} className="clear-completed" onClick={clearComplete}>Clear completed</button>
      </footer>
    );
  }
}
export default TodoFooter;
