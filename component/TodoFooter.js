/**
 * Created by zhangqiong on 16/12/22.
 */
import React, { Component, PropTypes } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router';
import { some, reduce, prop } from 'lodash/fp';


class TodoFooter extends Component {
  static propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    clearComplete: PropTypes.func,
    todos: PropTypes.array.isRequired,
  };

  renderLength() {
    const { todos } = this.props;
    return reduce((count, item) => prop('completed')(item) ? count : count + 1, 0)(todos);
  }

  render() {
    const { todos, clearComplete, onFilterChange } = this.props;
    const style = (some(todo => todo.completed)(todos) && prop('length')(todos) !== 0) ? null : { display: 'none' };
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.renderLength()}</strong>
          <span> items</span>
          <span> left</span>
        </span>
        <ul className="filters">
          <li>
            <Link to="/all" >
              <Button onClick={() => onFilterChange('SHOW_ALL')}>All</Button>
            </Link>
          </li>
          <li>
            <Link to="/active" >
              <Button onClick={() => onFilterChange('SHOW_ACTIVE')}>Active</Button>
            </Link>
          </li>
          <li>
            <Link to="/completed" >
              <Button onClick={() => onFilterChange('SHOW_COMPLETED')}>Completed</Button>
            </Link>
          </li>
        </ul>
        <Button style={style} className="clear-completed" onClick={clearComplete}>Clear completed</Button>
      </footer>
    );
  }
}
export default TodoFooter;
