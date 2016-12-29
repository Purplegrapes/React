/**
 * Created by zhangqiong on 16/12/27.
 */
import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  static propTypes = {
    onAddClick: PropTypes.func,
  }
  state = {
    text: '',
  }
  handleClick = (e) => {
    const text = this.state.text;

    if (e.keyCode === 13 && e.target.value !== '') {
      this.props.onAddClick(text);
      this.state.text = '';
    }
    this.setState({
      text: this.state.text,
    });
  }
  handleChange = (e) => {
    e.stopPropagation();
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <header className="header">
        <h1>
          Todos
        </h1>
        <input
          className="new-todo" type="text"
          placeholder="what's your task ?"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleClick}
        />
      </header>
    );
  }
}
