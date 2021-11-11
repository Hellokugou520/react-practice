import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { flag: false };

  render() {
    const { flag } = this.state;
    const { name, done } = this.props;
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
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: flag ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }

  enter = (flag) => {
    this.setState({ flag: !this.state.flag });
  };

  leave = (flag) => {
    this.setState({ flag: !this.state.flag });
  };
}
