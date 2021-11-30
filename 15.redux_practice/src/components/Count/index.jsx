import React, { Component } from "react";

export default class Count extends Component {
  add = () => {
    const { value } = this.numSelect;
  };
  reduce = () => {
    const { value } = this.numSelect;
  };
  addIfOdd = () => {
    const { value } = this.numSelect;
  };
  addAsync = () => {
    const { value } = this.numSelect;
  };
  render() {
    return (
      <div>
        <h1>当前求和为：0</h1>
        <select
          ref={(e) => {
            this.numSelect = e;
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.add}>+</button>&nbsp;
        <button onClick={this.reduce}>-</button>&nbsp;
        <button onClick={this.addIfOdd}>奇数+</button>&nbsp;
        <button onClick={this.addAsync}>异步+</button>
      </div>
    );
  }
}
