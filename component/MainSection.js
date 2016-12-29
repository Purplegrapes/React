/**
 * Created by zhangqiong on 16/12/21.
 */
import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

class MainSection extends Component {
  static propTypes = {
    onTodoClick: PropTypes.func,
    editTodo: PropTypes.func,
    toggleTodo: PropTypes.func,
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.number,
      text: PropTypes.string,
      complete: PropTypes.bool,
    }).isRequired).isRequired,
    delTodo: PropTypes.func,
  };
  toggleTodo = () => {
    const { toggleTodo } = this.props;
    toggleTodo();
  }

  render() {
    const { todos, onTodoClick, delTodo, editTodo } = this.props;
    return (
      <section className="main">
        <input className="toggle-all" type="checkBox" onChange={this.toggleTodo} />
        <ul className="todo-list">
          {
            todos.map((todo, index) =>
              <TodoItem
                {...todo}
                key={index}
                onTodoClick={onTodoClick}
                delTodo={delTodo}
                editTodo={editTodo}
              />,
            )
          }
        </ul>
      </section>
    );
  }
}
export default MainSection;
