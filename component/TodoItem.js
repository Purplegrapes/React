/**
 * Created by zhangqiong on 16/12/21.
 */
import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {
  static propTypes = {
    index: PropTypes.number,
    value: PropTypes.object,
    editText: PropTypes.string,
    changeTodo: PropTypes.func,
    delTodo: PropTypes.func,
    doneTodo: PropTypes.func,
    keyChange: PropTypes.func,
  };
  delTodo = () => {
    const { delTodo, index } = this.props;
    delTodo(index);
  }
  doneTodo = () => {
    const { doneTodo, value, index } = this.props;
    doneTodo(value, index);
  }
  handlechangeTodo = () => {
    const { changeTodo, value, index } = this.props;
    changeTodo(value, index);
  }
  handleKeychange = (e) => {
    const { index, keyChange } = this.props;
    keyChange(e, index);
  }

  render() {
    const { value, editText } = this.props;
    const classN = value.change ? 'editing' : null;
    const style = value.done ? { textDecoration: 'line-through', color: '#999' } : null;
    return (
      <li className={classN}>
        <div className="view">
          <input className="toggle" checked={value.done} type="checkBox" onChange={this.doneTodo} />
          <label style={style} onDoubleClick={this.handlechangeTodo}>{value.todo}</label>
          <button className="destroy" onClick={this.delTodo}></button>
        </div>
        <input className="edit" value={editText} onKeyDown={this.handleKeychange} />
      </li>

    );
  }
}
export default TodoItem;
