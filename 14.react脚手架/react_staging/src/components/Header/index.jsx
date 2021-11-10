import React, { Component } from "react";
import "./index.css";

export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.addTodo}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }

  // 调用父组件传递进来的方法，通过这种方式将子组件中的值传递给父组件
  addTodo = (e) => {
    const { keyCode, target } = e;
    if (keyCode === 13 && target.value.trim() !== "") {
      this.props.addTodo(target.value);
      target.value = "";
    }
  };
}
