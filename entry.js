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
    Alldone: false,
    Active: [],
    Done: [],
    type: 0,
  }
  Active = () => {
    const activeTodo = this.state.todoList.filter(item => item.done === false);
    activeTodo.map((item) => {
      item.listyle = { display: 'none' };
      return activeTodo;
    });
    this.setState({
      Active: activeTodo,
      type: 1,
    });
    console.log(activeTodo);
  }
  All = () => {
    this.setState({
      type: 0,
    });
  }
  Completed = () => {
    const activeTodo = this.state.todoList.filter(item => item.done === true);
    activeTodo.map((item) => {
      item.listyle = { display: 'none' };
      return activeTodo;
    });
    this.setState({
      Done: activeTodo,
      type: 2,
    });
    console.log(activeTodo);
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
    } else {
      this.state.Alldone = false;
      this.setState({
        todoList: this.state.todoList.map((todo) => {
          todo.done = false;
          return todo;
        }),
        Alldone: this.state.Alldone,
      });
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
        id: index, todo: this.state.value, done: false, listyle: null,
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
  //  清除已完成的todo
  clearDone = () => {
    const todos = this.state.todoList.filter(item => item.done === false);
    this.setState({
      todoList: todos, Alldone: false,
    });
  }

  render() {
    const showItems = this.state.type === 1 ? this.state.Active : this.state.todoList;
    const todo = this.state.todoList;
    const style = todo.length === 0 ? { display: 'none' } : null;
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
          showItems={showItems}
          activetodo={this.state.Active}
          done={this.state.done}
          style={style}
          delTodo={this.delTodo}
          Alldone={this.state.Alldone}
          doneTodo={this.doneTodo}
          allDone={this.allDone}
          type={this.state.type}
        />
        <TodoFooter todo={this.state.todoList} clearDone={this.clearDone} Active={this.Active}
                    Completed={this.Completed} All={this.All} />
      </div>
    );
  }
}

ReactDom.render(<Content />, document.getElementsByClassName('todoapp')[0]);
