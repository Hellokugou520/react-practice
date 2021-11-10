import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todoList: [
      { id: "1", name: "学习", done: true },
      { id: "2", name: "玩游戏", done: true },
      { id: "3", name: "阅读", done: false },
    ],
  };

  render() {
    const { todoList } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todoList={todoList} />
          <Footer />
        </div>
      </div>
    );
  }

  addTodo = (data) => {
    const { todoList } = this.state;
    this.setState({
      todoList: [
        { id: String(todoList.length + 1), name: data, done: false },
        ...todoList,
      ],
    });
  };
}
