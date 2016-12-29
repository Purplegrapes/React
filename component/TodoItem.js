/**
 * Created by zhangqiong on 16/12/21.
 */
import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {
  static propTypes = {
    onTodoClick: PropTypes.func,
    delTodo: PropTypes.func,
    text: PropTypes.string,
    complete: PropTypes.bool,
    id: PropTypes.number,
  };
  onTodoClick = () => {
    const { onTodoClick, id } = this.props;
    onTodoClick(id);
    console.log(id);
  }
  delTodoClick = () => {
    const { delTodo, id } = this.props;
    delTodo(id);
    console.log(id);
  }

  render() {
    const { text, complete } = this.props;
    return (
      <li
        style={{ textDecoration: complete ? 'line-through' : 'none' }}
      >
        <div className="view">
          <input className="toggle" type="checkBox" checked={complete} onChange={this.onTodoClick} />
          <label>{text}</label>
          <button className="destroy" onClick={this.delTodoClick}></button>
        </div>
        <input className="edit" />
      </li>

    );
  }
}
export default TodoItem;
