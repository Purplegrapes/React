/**
 * Created by zhangqiong on 16/12/21.
 */
import React from 'react';
import ReactDom from 'react-dom';
import './main.css';
import MainSection from './component/MainSection';
import TodoFooter from './component/TodoFooter';

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    };
  }

  handlerKeyUp(event) {
    if (event.keyCode === 13) {
      this.setState({
        value: event.target.value,
      });
    }
  }

  render() {
    return (
      <div>
        <header className="header" data-reactid=".0.0">
          <h1>
            Todos
          </h1>
          <input className="new-todo" onKeyUp={this.handlerKeyUp} type="text" placeholder="what's your task ?" />
        </header>
        <MainSection value={this.state.value} />
        <TodoFooter />
      </div>
    );
  }
}

ReactDom.render(
  <Content />,
  document.getElementsByClassName('todoapp')[0],
);
