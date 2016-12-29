/**
 * Created by zhangqiong on 16/12/21.
 */
import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

class MainSection extends Component {
  static propTypes = {
    onTodoClick: PropTypes.func,
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.number,
      text: PropTypes.string,
      completed: PropTypes.bool,
    }).isRequired).isRequired,
    delTodo: PropTypes.func,
  };

  render() {
    const { todos, onTodoClick,delTodo } = this.props;
    return (
      <section className="main">
        <input className="toggle-all" type="checkBox" />
        <ul className="todo-list">
          {
            todos.map((todo, index) =>
              <TodoItem
                {...todo}
                key={index}
                onTodoClick={onTodoClick}
                delTodo={delTodo}
              />,
            )
          }
        </ul>
      </section>
    );
  }
}
export default MainSection;
