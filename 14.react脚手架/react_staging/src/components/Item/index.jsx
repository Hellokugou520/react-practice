import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  // 鼠标是否移入某个todo项
  state = { flag: false };

  render() {
    const { flag } = this.state;
    const { id, name, done } = this.props;
    return (
      <li
        onMouseEnter={() => {
          this.enter(true);
        }}
        onMouseLeave={() => {
          this.leave(false);
        }}
        style={{ backgroundColor: flag ? "#ccc" : "#fff" }}
      >
        <label>
          <input
            type="checkbox"
            defaultChecked={done}
            onChange={(e) => {
              this.updateTodo(id, e);
            }}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: flag ? "block" : "none" }}
          onClick={() => {
            this.deleteTodo(id);
          }}
        >
          删除
        </button>
      </li>
    );
  }

  enter = (flag) => {
    this.setState({ flag: flag });
  };

  leave = (flag) => {
    this.setState({ flag: flag });
  };
  // 调用上层组件传递进来的更新方法
  updateTodo = (id, e) => {
    this.props.updateTodo(id, e.target.checked);
  };
  deleteTodo = (id) => {
    this.props.deleteTodo(id);
  };
}
