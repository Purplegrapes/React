/**
 * Created by zhangqiong on 16/12/21.
 */
import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

class MainSection extends Component {
  static propTypes = {
    showItems: PropTypes.array,
    Alldone: PropTypes.bool,
    delTodo: PropTypes.func,
    doneTodo: PropTypes.func,
    toggleAll: PropTypes.func,
    style: PropTypes.object,
  };

  render() {
    const { showItems, delTodo, doneTodo, toggleAll, Alldone, style } = this.props;
    return (
      <section className="main">
        <input style={style} className="toggle-all" type="checkBox" checked={Alldone} onChange={toggleAll} />
        <ul className="todo-list">
          {
            showItems.map((item, i) => <TodoItem
              key={i} done={item.done} index={i} value={item} listyle={item.style}
              delTodo={delTodo}
              doneTodo={doneTodo}
            />)
          }
        </ul>
      </section>
    );
  }
}
export default MainSection;
