/**
 * Created by zhangqiong on 16/12/21.
 */
import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {
  static propTypes = {
    index: PropTypes.number,
    value: PropTypes.object,
    delTodo: PropTypes.func,
    doneTodo: PropTypes.func,
    allDone:PropTypes.func,
  };

  delTodo = () => {
    const { delTodo, index } = this.props;
    delTodo(index);
  }
  doneTodo = () => {
    const { doneTodo, value, index,allDone } = this.props;
    doneTodo(value, index);
    console.log(value.done);
  }
  render() {
    const { value} = this.props;
    const style = value.done ? { textDecoration: 'line-through', color: '#999' } : null;
    return (
      <li className="">
        <div className="view">
          <input className="toggle" checked={value.done} type="checkBox" onChange={this.doneTodo} />
          <label style={style}>{value.todo}</label>
          <button className="destroy" onClick={this.delTodo}></button>
        </div>
        <input className="edit" />
      </li>

    );
  }
}
export default TodoItem;
