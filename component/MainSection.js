/**
 * Created by zhangqiong on 16/12/21.
 */
import React from 'react';
import TodoItem from './TodoItem';
class MainSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkBox" />
        <ul className="todo-list">
          <TodoItem />
        </ul>
      </section>
    );
  }
}
export default MainSection;
