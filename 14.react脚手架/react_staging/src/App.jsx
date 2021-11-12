import React, { Component } from "react";
import { nanoid } from "nanoid";
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
          <List
            todoList={todoList}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todoList={todoList}
            checkAll={this.checkAll}
            clearTodo={this.clearTodo}
          />
        </div>
      </div>
    );
  }

  addTodo = (data) => {
    const { todoList } = this.state;
    this.setState({
      todoList: [{ id: nanoid(), name: data, done: false }, ...todoList],
    });
  };

  // 更新todoList里的数据状态
  updateTodo = (id, done) => {
    const { todoList } = this.state;
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        // 相同键名会覆盖
        return { ...item, done: done };
      } else {
        return item;
      }
    });
    this.setState({ todoList: newTodoList });
  };

  // 删除一项todo
  deleteTodo = (id) => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter((item) => {
      return item.id !== id;
    });
    this.setState({ todoList: newTodoList });
  };

  // 全选
  checkAll = (done) => {
    const { todoList } = this.state;
    const newTodoList = todoList.map((item) => {
      return { ...item, done };
    });
    this.setState({ todoList: newTodoList });
  };

  // 清除已完成事项
  clearTodo = () => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter((item) => {
      return item.done === false;
    });
    this.setState({ todoList: newTodoList });
  };
}
