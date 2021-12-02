import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class Person extends Component {
  add = () => {
    const name = this.name.value;
    const age = this.age.value;
    const personObj = { id: nanoid(), name, age };
    console.log(personObj);
  };

  render() {
    return (
      <div>
        <h1>Person组件</h1>
        <input
          ref={(el) => (this.name = el)}
          type="text"
          placeholder="请输入姓名"
        />
        &nbsp;
        <input
          ref={(el) => (this.age = el)}
          type="text"
          placeholder="请输入年龄"
        />
        &nbsp;
        <button onClick={this.add}>添加</button>
        <ul>
          <li>姓名1--年龄1</li>
          <li>姓名2--年龄2</li>
          <li>姓名3--年龄3</li>
        </ul>
      </div>
    );
  }
}
