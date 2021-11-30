import React, { Component } from "react";

export default class Count extends Component {
  add = () => {
    const { value } = this.numSelect;
    this.props.add(value * 1);
  };
  reduce = () => {
    const { value } = this.numSelect;
    this.props.reduce(value * 1);
  };
  addIfOdd = () => {
    const { value } = this.numSelect;
    if (this.props.count % 2 !== 0) {
      this.props.add(value * 1);
    }
  };
  addAsync = () => {
    const { value } = this.numSelect;
    this.props.addAsync(value * 1, 500);
  };
  render() {
    console.log("子组件接收到的props", this.props);
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
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
