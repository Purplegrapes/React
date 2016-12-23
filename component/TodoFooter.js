/**
 * Created by zhangqiong on 16/12/22.
 */
import React, { Component, PropTypes } from 'react';

class TodoFooter extends Component {
  static propTypes = {
    length: PropTypes.number,
  }

  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.length}</strong>
          <span> item</span>
          <span> left</span>
        </span>
        <ul className="filters">
          <li>
            <a className="" href="#/">All</a>
          </li>
          <span> </span>
          <li>
            <a className="" href="#/active">Active</a>
          </li>
          <span> </span>
          <li>
            <a className="" href="#/completed">Completed</a>
          </li>
          <span> </span>
        </ul>
      </footer>
    );
  }

}
export default TodoFooter;
