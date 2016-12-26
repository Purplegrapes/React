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
    type: 0,
    showItems: [],
    change: false,
    editText: '',
  }
  //  修改todo
  changeTodo = (value, index) => {
    if (value.id === this.state.todoList[index].id) {
      this.state.todoList[index].change = !this.state.todoList[index].change;
      this.setState({
        todoList: this.state.todoList,
      });
      console.log(this.state.todoList[index].change);
    }
  }
  //  修改后将todoList刷新
  keyChange = (e, index) => {
    if (e.keyCode === 27) {
      this.state.todoList[index].change = false;
      this.setState({
        todoList: this.state.todoList,
      });
    } else if (e.keyCode === 13) {
      console.log(index);
      this.state.todoList[index].change = false;
      this.state.todoList[index].todo = e.target.value;
      this.state.editText = this.state.todoList[index].todo;
      this.setState({
        todoList: this.state.todoList,
        editText: this.state.editText,
      });
    }
  }
  //  添加todo
  handleAdd = (e) => {
    if (e.keyCode === 13) {
      const index = this.state.todoList.length;
      const newItem = {
        id: index, todo: this.state.value, done: false, listyle: null, change: false,
      };
      this.state.value = '';
      if (newItem.todo !== '') {
        this.state.todoList.push(newItem);
        this.setState({
          todoList: this.state.todoList,
          showItems: this.state.todoList,
        });
      }
    }
  }
  handleChange = (e) => {
    e.stopPropagation();
    this.setState({ value: e.target.value });
  }

  //  点击全选触发的函数
  toggleAll = () => {
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
    this.state.showItems.splice(index, 1);
    this.setState({
      todoList: this.state.todoList,
      showItems: this.state.showItems,
    });
  }
  //  如果每个todo都被选择或都不被选择触发的函数
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
        showItems: this.state.todoList,
      });
      this.allCheck();
    }
    else if (value.id === this.state.showItems[index].id) {
      this.state.showItems[index].done = !this.state.showItems[index].done;
      this.setState({
        todoList: this.state.todoList,
        showItems: this.state.showItems,
      });
      this.allCheck();
    }
  }
  //  footer三个按钮触发的函数
  Active = () => {
    const activeTodo = this.state.todoList.filter(item => item.done === false);
    activeTodo.map((item) => {
      item.listyle = { display: 'none' };
      return activeTodo;
    });
    this.setState({
      showItems: activeTodo,
      type: 1,
    });
    console.log(activeTodo);
  }
  All = () => {
    this.setState({
      type: 0,
      showItems: this.state.todoList,
    });
  }
  Completed = () => {
    const activeTodo = this.state.todoList.filter(item => item.done === true);
    activeTodo.map((item) => {
      item.listyle = { display: 'none' };
      return activeTodo;
    });
    this.setState({
      showItems: activeTodo,
      type: 2,
    });
    console.log(activeTodo);
  }
  //  清除已完成的todo
  clearDone = () => {
    const todos = this.state.todoList.filter(item => item.done === false);
    this.setState({
      todoList: todos,
      Alldone: false,
      showItems: todos,
    });
  }

  render() {
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
          showItems={this.state.showItems}
          type={this.state.type}
          exitText={this.state.exitText}
          Alldone={this.state.Alldone}
          style={style}
          delTodo={this.delTodo}
          doneTodo={this.doneTodo}
          toggleAll={this.toggleAll}
          changeTodo={this.changeTodo}
          handleChange={this.handleChange}
          keyChange={this.keyChange}
        />
        <TodoFooter
          todo={todo}
          clearDone={this.clearDone}
          Active={this.Active}
          Completed={this.Completed}
          All={this.All}
        />
      </div>
    );
  }
}

ReactDom.render(<Content />, document.getElementsByClassName('todoapp')[0]);
