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
    todoList: [], value: '', Alldone: false,
  }
  //  点击全选触发的函数
  allDone = () => {
    if (!this.state.Alldone) {
      this.state.Alldone = true;
      this.setState({
        todoList: this.state.todoList.map((todo) => {
          todo.done = true;
          return todo;
        }),
        Alldone: this.state.Alldone,
      });
      console.log("22" + this.state.Alldone);
    } else {
      this.state.Alldone = false;
      this.setState({
        todoList: this.state.todoList.map((todo) => {
          todo.done = false;
          return todo;
        }),
        Alldone: this.state.Alldone,
      });
      console.log("32" + this.state.Alldone);
    }
    return this.state.Alldone;
  }
  //  删除当前todo
  delTodo = (index) => {
    this.state.todoList.splice(index, 1);
    this.setState({
      todoList: this.state.todoList,
    });
  }
  //   如果每个todo都被选择或都不被选择触发的函数
  allCheck = () => {
    if (this.state.todoList.every(todo => todo.done)) {
      this.state.Alldone = true;
      this.setState({ Alldone: true });
    } else if (this.state.todoList.every(todo => !todo.done)) {
      this.state.Alldone = false;
      this.setState({ Alldone: false });
    }
  }
  //  单个todo点击触发的事件
  doneTodo = (value, index) => {
    if (value.id === this.state.todoList[index].id) {
      this.state.todoList[index].done = !this.state.todoList[index].done;
      this.setState({
        todoList: this.state.todoList,
      });
      this.allCheck();
    }
  }
//  添加todo
  handleAdd = (e) => {
    if (e.keyCode === 13) {
      const index = this.state.todoList.length;
      const newItem = {
        id: index, todo: this.state.value, done: false,
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
          <input
            className="new-todo" type="text"
            placeholder="what's your task ?"
            value={this.state.value}
            onKeyDown={this.handleAdd}
            onChange={this.handleChange}
          />
        </header>
        <MainSection
          todo={todo}
          delTodo={this.delTodo}
          Alldone={this.state.Alldone}
          doneTodo={this.doneTodo}
          allDone={this.allDone}
        />
        <TodoFooter todo={this.state.todoList} />
      </div>
    );
  }
}

ReactDom.render(<Content />, document.getElementsByClassName('todoapp')[0]);
