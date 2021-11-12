import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  render() {
    return <button onClick={this.getStudent}>点击获取学生数据</button>;
  }

  getStudent = () => {
    axios.get("http://localhost:3000/students").then(
      (res) => {
        console.log("成功", res.data);
      },
      (err) => {
        console.log("失败", err);
      }
    );
  };
}
