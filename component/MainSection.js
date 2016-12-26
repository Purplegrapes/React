/**
 * Created by zhangqiong on 16/12/21.
 */
import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

class MainSection extends Component {
  static propTypes = {
    showItems: PropTypes.array,
    Alldone: PropTypes.bool,
    style: PropTypes.object,
    editText: PropTypes.string,
    handleChange: PropTypes.func,
    delTodo: PropTypes.func,
    doneTodo: PropTypes.func,
    toggleAll: PropTypes.func,
    changeTodo: PropTypes.func,
    keyChange: PropTypes.func,
  };

  render() {
    const { showItems, delTodo,
            doneTodo, toggleAll,
            Alldone, style,
            changeTodo, editText,
            handleChange, keyChange } = this.props;
    return (
      <section className="main">
        <input style={style} className="toggle-all" type="checkBox" checked={Alldone} onChange={toggleAll} />
        <ul className="todo-list">
          {
            showItems.map((item, i) => <TodoItem
              key={i} done={item.done} index={i} value={item} listyle={item.style}
              delTodo={delTodo}
              doneTodo={doneTodo}
              changeTodo={changeTodo}
              editText={editText}
              handleChange={handleChange}
              keyChange={keyChange}
            />)
          }
        </ul>
      </section>
    );
  }
}
export default MainSection;
