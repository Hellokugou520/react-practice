import React, { Component } from "react";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";
import { add, reduce, addAsync } from "../../redux/actions/count";

class Count extends Component {
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
    const { person, count } = this.props;
    return (
      <div>
        <h1>Count组件,Person组件有{person}个人</h1>
        <h2>当前求和为：{count}</h2>
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

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  (state) => ({
    count: state.countReducer,
    person: state.personReducer.length,
  }),
  {
    add,
    reduce,
    addAsync,
  }
)(Count);
