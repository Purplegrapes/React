/**
 * Created by zhangqiong on 16/12/21.
 */
import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {
  static propTypes = {
    onTodoClick: PropTypes.func,
    editTodo: PropTypes.func,
    editStatus: PropTypes.func,
    delTodo: PropTypes.func,
    text: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number,
    edited: PropTypes.bool,
  };
  state = {
    text: this.props.text,
  }
  onTodoClick = () => {
    const { onTodoClick, id } = this.props;
    onTodoClick(id);
  }
  delTodoClick = () => {
    const { delTodo, id } = this.props;
    delTodo(id);
  }
  handleKeyDown = (e) => {
    const { text } = this.state;
    const { id, editTodo } = this.props;
    if (e.keyCode === 13) {
      editTodo(text, id);
    }
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }
  toggleEditStatus = () => {
    const { id, editStatus } = this.props;
    editStatus(id);
  }

  render() {
    const { text, completed, edited } = this.props;
    const inputStyle = edited === true ? 'editing' : null;
    return (
      <li
        className={inputStyle}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        <div className="view">
          <input className="toggle" type="checkBox" checked={completed} onChange={this.onTodoClick} />
          <label onDoubleClick={this.toggleEditStatus}>{text}</label>
          <button className="destroy" onClick={this.delTodoClick} />
        </div>
        <input className="edit" value={this.state.text} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
      </li>

    );
  }
}
export default TodoItem;
