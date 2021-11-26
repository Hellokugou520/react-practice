import React, { Component } from "react";

export default class Count extends Component {
  state = { count: 0 };
  add = () => {
    const { count } = this.state;
    const { value } = this.numSelect;
    this.setState({ count: count + value * 1 });
  };
  reduce = () => {
    const { count } = this.state;
    const { value } = this.numSelect;
    this.setState({ count: count - value * 1 });
  };
  addIfOdd = () => {
    const { count } = this.state;
    const { value } = this.numSelect;
    if (count % 2 !== 0) {
      this.setState({ count: count + value * 1 });
    }
  };
  addAsync = () => {
    const { count } = this.state;
    const { value } = this.numSelect;
    setTimeout(() => {
      this.setState({ count: count + value * 1 });
    }, 500);
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>当前求和为：{count}</h1>
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
