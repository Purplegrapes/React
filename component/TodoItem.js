/**
 * Created by zhangqiong on 16/12/21.
 */
import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {
  static propTypes = {
    value: PropTypes.string,
    index: PropTypes.number,
    delTodo: PropTypes.func,
  };

  delTodo = () => {
    const { delTodo, index } = this.props;
    delTodo(index);
  }

  render() {
    const { value } = this.props;
    return (
      <li className="">
        <div className="view">
          <input className="toggle" type="checkBox" />
          <label>{value}</label>
          <button className="destroy" onClick={this.delTodo}></button>
        </div>
        <input className="edit" />
      </li>
    );
  }
}
export default TodoItem;
