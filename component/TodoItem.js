/**
 * Created by zhangqiong on 16/12/21.
 */
import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {
  static propTypes = {
    onTodoClick: PropTypes.func,
    editTodo: PropTypes.func,
    delTodo: PropTypes.func,
    text: PropTypes.string,
    complete: PropTypes.bool,
    id: PropTypes.number,
  };
  state = {
    text: this.props.text,
    edit: false,
  }
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
  handleKeyDown = (e) => {
    const text = this.state.text;
    const { id, editTodo } = this.props;
    if (e.keyCode === 13) {
      editTodo(text, id);
      this.toggleEditStatus();
    }
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }
  toggleEditStatus = () => {
    this.setState({
      edit: !this.state.edit,
    });
  }

  render() {
    const { text, complete } = this.props;
    const inputStyle = this.state.edit === true ? 'editing' : null;
    return (
      <li
        className={inputStyle}
        style={{ textDecoration: complete ? 'line-through' : 'none' }}
      >
        <div className="view">
          <input className="toggle" type="checkBox" checked={complete} onChange={this.onTodoClick} />
          <label onDoubleClick={this.toggleEditStatus}>{text}</label>
          <button className="destroy" onClick={this.delTodoClick}></button>
        </div>
        <input className="edit" value={this.state.text} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
      </li>

    );
  }
}
export default TodoItem;
