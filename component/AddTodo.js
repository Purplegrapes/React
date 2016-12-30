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
  handleKeyDown = (e) => {
    const { text } = this.state;
    const { onAddClick } = this.props;

    if (e.keyCode === 13 && e.target.value !== '') {
      onAddClick(text);
      this.setState({
        text: '',
      });
    }
  }
  handleChange = ({ target: { value } }) => {
    this.setState({ text: value });
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
          onKeyDown={this.handleKeyDown}
        />
      </header>
    );
  }
}
