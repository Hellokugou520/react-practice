import React, { Component } from "react";

export default class Home extends Component {
  render() {
    console.log("路由组件中接收到的props", this.props);
    return <h3>我是About的内容</h3>;
  }
}
