import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  // 回退
  goBack = () => {
    this.props.history.goBack();
  };
  // 前进
  goForward = () => {
    this.props.history.goForward();
  };
  // 指定前进或回退几步(正数前进，负数回退)
  go = () => {
    this.props.history.go(2);
  };
  render() {
    return (
      <div>
        <h2>React Router Demo</h2>
        <button onClick={this.goBack}>goBack</button>&nbsp;
        <button onClick={this.goForward}>goForward</button>&nbsp;
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}

export default withRouter(Header);
//withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
//withRouter的返回值是一个新组件
