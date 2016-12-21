/**
 * Created by zhangqiong on 16/12/21.
 */
import React from "react";
import ReactDom from "react-dom";
class  Hello extends React.Component {
  render() {
    return (
      <h5>
        Hello world
      </h5>
    )

  }
}
ReactDom.render(
  <Hello/>,
  document.getElementById("container")
);
