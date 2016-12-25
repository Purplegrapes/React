/**
 * Created by zhangqiong on 16/12/21.
 */
import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

class MainSection extends Component {
  static propTypes = {
    todo: PropTypes.array,
    Alldone: PropTypes.bool,
    delTodo: PropTypes.func,
    doneTodo: PropTypes.func,
    allDone: PropTypes.func,
    style:PropTypes.object,
  };

  render() {
    const { todo, delTodo, doneTodo, allDone, Alldone,style } = this.props;
    return (
      <section className="main">
        <input style={style} className="toggle-all" type="checkBox" checked={Alldone} onChange={allDone} />
        <ul className="todo-list">
          {
            todo.map((item, i) => <TodoItem
              key={i} done={item.done} index={i} value={item}
              delTodo={delTodo}
              doneTodo={doneTodo} allDone={allDone}
            />)
          }
        </ul>
      </section>
    );
  }
}
export default MainSection;
