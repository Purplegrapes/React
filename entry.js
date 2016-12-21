/**
 * Created by zhangqiong on 16/12/21.
 */
import React from "react";
import ReactDom from "react-dom";

import './main.css';

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello world
      </div>

    )
  }
}
ReactDom.render(
  <Hello/>,
  document.getElementById("container")
);
