/**
 * Created by zhangqiong on 16/12/21.
 */
import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

class MainSection extends Component {
  static propTypes = {
    todo: PropTypes.array,
    delTodo: PropTypes.func,
    doneTodo: PropTypes.func,
  };

  render() {
    const { todo, delTodo, doneTodo } = this.props;
    return (
      <section className="main">
        <input className="toggle-all" type="checkBox" />
        <ul className="todo-list">
          {
            todo.map((item, i) =>
              <TodoItem key={i} done={item.done} index={i} value={item} delTodo={delTodo} doneTodo={doneTodo} />,
            )
          }
        </ul>
      </section>
    );
  }
}
export default MainSection;
