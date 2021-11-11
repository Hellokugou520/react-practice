import React, { Component } from "react";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  render() {
    const { todoList, updateTodo } = this.props;
    return (
      <ul className="todo-main">
        {todoList.map((item) => {
          return <Item key={item.id} {...item} updateTodo={updateTodo} />;
        })}
      </ul>
    );
  }
}
