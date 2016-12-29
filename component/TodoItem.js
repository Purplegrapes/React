/**
 * Created by zhangqiong on 16/12/21.
 */
import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {
  static propTypes = {
    onTodoClick: PropTypes.func,
    text: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number,
  };
  onTodoClick = () => {
    const { onTodoClick } = this.props;
    onTodoClick(this.props.id);
    console.log(this.props.id);
  }

  render() {
    const { text, completed } = this.props;
    return (
      <li
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        <div className="view">
          <input className="toggle" type="checkBox" checked={completed} onChange={this.onTodoClick} />
          <label>{text}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" />
      </li>

    );
  }
}
export default TodoItem;
