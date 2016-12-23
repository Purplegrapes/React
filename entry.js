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
  };

  delTodo = (index) => {
    this.state.todoList.splice(index, 1);
    this.setState({
      todoList: this.state.todoList,
    });
  };

  handleAdd = (e) => {
    if (e.keyCode === 13) {
      const newItem = this.state.value;
      this.state.value = '';
      if (newItem !== '') {
        this.state.todoList.push(newItem);
        this.setState({ todoList: this.state.todoList });
      }
    }
  };
  handleChange = (e) => {
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
          <input className="new-todo" onKeyDown={this.handleAdd} value={this.state.value}type="text" placeholder="what's your task ?" onChange={this.handleChange} />
        </header>
        <MainSection todo={todo} delTodo={this.delTodo} />
        <TodoFooter length={this.state.todoList.length} />
      </div>
    );
  }
}

ReactDom.render(
  <Content />,
  document.getElementsByClassName('todoapp')[0],
);
