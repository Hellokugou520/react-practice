import React, { Component } from "react";
// 引入store，用于获取redux中保存的状态
import store from "../../redux/store";
// 引入actionCreator，专门用于创建action对象
import { addAction, reduceAction } from "../../redux/count_action";

export default class Count extends Component {
  add = () => {
    const { value } = this.numSelect;
    store.dispatch(addAction(value * 1));
  };
  reduce = () => {
    const { value } = this.numSelect;
    store.dispatch(reduceAction(value * 1));
  };
  addIfOdd = () => {
    const count = store.getState();
    const { value } = this.numSelect;
    if (count % 2 !== 0) {
      store.dispatch(addAction(value * 1));
    }
  };
  addAsync = () => {
    const { value } = this.numSelect;
    setTimeout(() => {
      store.dispatch(addAction(value * 1));
    }, 500);
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
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
