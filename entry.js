/**
 * Created by zhangqiong on 16/12/21.
 */
import React, { Component }from 'react';
import ReactDom from 'react-dom';
import './main.css';
import MainSection from './component/MainSection';
import TodoFooter from './component/TodoFooter';

class Content extends Component {
  state = {
    todoList: [],
    value: '',
  }

  delTodo = (index) => {
    this.state.todoList.splice(index, 1);
    this.setState({
      todoList: this.state.todoList,
    });
  }
  doneTodo = (value, index) => {
    if (value.id === this.state.todoList[index].id) {
      this.state.todoList[index].done = !this.state.todoList[index].done;
    }
    this.setState({
      todoList: this.state.todoList,
    });
  }

  handleAdd = (e) => {
    if (e.keyCode === 13) {
      const index = this.state.todoList.length;
      const newItem = {
        id: index,
        todo: this.state.value,
        done: false,
      };
      this.state.value = '';
      if (newItem.todo !== '') {
        this.state.todoList.push(newItem);
        this.setState({ todoList: this.state.todoList });
      }
    }
  };
  handleChange = (e) => {
    e.stopPropagation();
    this.setState({ value: e.target.value });
  }

  render() {
    const todo = this.state.todoList;
    return (
      <div>
        <header className="header">
          <h1>
            Todos
          </h1>
          <input className="new-todo" onKeyDown={this.handleAdd} value={this.state.value} type="text"
                 placeholder="what's your task ?" onChange={this.handleChange} />
        </header>
        <MainSection todo={todo} delTodo={this.delTodo} doneTodo={this.doneTodo} allClear={this.allClear} />
        <TodoFooter todo={this.state.todoList} />
      </div>
    );
  }
}

ReactDom.render(
  <Content />,
  document.getElementsByClassName('todoapp')[0],
);
