import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  render() {
    const { todoList } = this.props;
    const doneNum = todoList.reduce((pre, cur) => {
      return pre + (cur.done ? 1 : 0);
    }, 0);
    const allNum = todoList.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneNum === allNum && allNum !== 0}
            onChange={this.checkAll}
          />
        </label>
        <span>
          <span>已完成{doneNum}</span> / 全部{allNum}
        </span>
        <button className="btn btn-danger" onClick={this.clearTodo}>
          清除已完成任务
        </button>
      </div>
    );
  }

  checkAll = (e) => {
    this.props.checkAll(e.target.checked);
  };
  clearTodo = () => {
    this.props.clearTodo();
  };
}
