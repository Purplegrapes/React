/**
 * Created by zhangqiong on 16/12/22.
 */
import React, { Component, PropTypes } from 'react';

class TodoFooter extends Component {
  static propTypes = {
    todo: PropTypes.array,

    clearDone: PropTypes.func,
    Active: PropTypes.func,
    Completed: PropTypes.func,
    All: PropTypes.func,
  };
  allType = () => {
    this.props.All();
  }
  activeType = () => {
    this.props.Active();
  }
  completedType = () => {
    this.props.Completed();
  }

  render() {
    const { todo, clearDone } = this.props;
    const doneCount = todo.reduce((count, item) => item.done ? count : count + 1, 0);
    const style = todo.length - doneCount === 0 ? { display: 'none' } : null;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{doneCount}</strong>
          <span> item</span>
          <span> left</span>
        </span>
        <ul className="filters">
          <li onClick={this.allType}>
            <a className="">All</a>
          </li>
          <li onClick={this.activeType}>
            <a className="">Active</a>
          </li>
          <span> </span>
          <li onClick={this.completedType}>
            <a className="">Completed</a>
          </li>
          <span> </span>
        </ul>
        <button style={style} onClick={clearDone} className="clear-completed">Clear completed</button>
      </footer>
    );
  }

}
export default TodoFooter;
