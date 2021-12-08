import React, { Component } from "react";

export default class Demo extends Component {
  state = { count: 0 };
  add = () => {
    // 1------对象式的setState
    // const { count } = this.state;
    // this.setState({ count: count + 1 }, () => {
    //   console.log("异步-当前次数为：", this.state.count);
    // });
    // /**
    //  * 首次点击按钮输出0
    //  * 官网文档说明：
    //  * setState() 并不总是立即更新组件。它会批量推迟更新。这使得在调用 setState() 后立即读取 this.state 成为了隐患。
    //  * 为了消除隐患，请使用 componentDidUpdate 或者 setState 的回调函数（setState(updater, callback)），这两种
    //  * 方式都可以保证在应用更新后触发。
    //  */
    // console.log("同步-当前次数为：", this.state.count);
    // 2------函数式的setState
    this.setState((state, props) => {
      return { count: state.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <h2>次数：{this.state.count}</h2>
        <button onClick={this.add}>次数+1</button>
      </div>
    );
  }
}
