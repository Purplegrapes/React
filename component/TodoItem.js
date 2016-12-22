/**
 * Created by zhangqiong on 16/12/21.
 */
import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <li className="">
        <div className="view">
          <input className="toggle" type="checkBox" />
          <label></label>
          <button className="destroy"></button>
        </div>
        <input className="edit" />
      </li>
    );
  }
}
export default TodoItem;
