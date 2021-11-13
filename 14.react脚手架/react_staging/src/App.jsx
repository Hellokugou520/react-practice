import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.getStudent}>点击获取学生数据</button>
        <button onClick={this.getCars}>点击获取汽车数据</button>
      </div>
    );
  }

  getStudent = () => {
    axios.get("http://localhost:3000/api1/students").then(
      (res) => {
        console.log("成功", res.data);
      },
      (err) => {
        console.log("失败", err);
      }
    );
  };
  getCars = () => {
    axios.get("http://localhost:3000/api2/cars").then(
      (res) => {
        console.log("成功", res.data);
      },
      (err) => {
        console.log("失败", err);
      }
    );
  };
}
