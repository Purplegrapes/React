/**
 * Created by zhangqiong on 16/12/22.
 */
import React, { Component, PropTypes } from 'react';

class TodoFooter extends Component {
  static propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
      'SHOW_ALL',
      'SHOW_COMPLETED',
      'SHOW_ACTIVE',
    ]).isRequired,
  };

  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name;
    }
    return (
      <a
        href="#/a"
        onClick={(e) => { e.preventDefault(); this.props.onFilterChange(filter); }}
      >
        {name}
      </a>
    );
  }

  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>1</strong>
          <span> item</span>
          <span> left</span>
        </span>
        <ul className="filters">
          <li>
            {this.renderFilter('SHOW_ALL', 'All')}
            {' '}
          </li>
          <li>
            {this.renderFilter('SHOW_ACTIVE', 'Active')}
          </li>
          <li>
            {this.renderFilter('SHOW_COMPLETED', 'Completed')}
            {' '}
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}
export default TodoFooter;
