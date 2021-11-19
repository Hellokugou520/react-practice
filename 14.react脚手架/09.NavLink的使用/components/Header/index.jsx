import React, { Component } from "react";

export default class Header extends Component {
  render() {
    console.log("一般组件中接收到的props", this.props);
    return <h2>React Router Demo</h2>;
  }
}
