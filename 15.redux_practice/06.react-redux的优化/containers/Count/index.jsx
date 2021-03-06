import React, { Component } from "react";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";
import {
  addAction,
  reduceAction,
  addAsyncAction,
} from "../../redux/count_action";

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

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  (state) => ({ count: state }),
  // mapDispatchToProps的一般写法
  // (dispatch) => ({
  //   add: (data) => dispatch(addAction(data)),
  //   reduce: (data) => dispatch(reduceAction(data)),
  //   addAsync: (data, time) => dispatch(addAsyncAction(data, time)),
  // })

  // mapDispatchToProps的简写
  {
    add: addAction,
    reduce: reduceAction,
    addAsync: addAsyncAction,
  }
)(Count);
