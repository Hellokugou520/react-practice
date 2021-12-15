import React, { Component } from "react";

export default class Parent extends Component {
  state = { error: "" };
  // 捕获错误信息
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    // 通过判断是否有错误信息来决定是否展示降级UI，而不是因为部分组件的报错导致整个页面的崩溃
    // 代码需要运行在开发环境才能维持这个效果
    return <div>{error ? <h2>网络波动</h2> : <Children />}</div>;
  }
}

class Children extends Component {
  state = { gameList: "" };
  render() {
    const { gameList } = this.state;
    return (
      <div>
        {gameList.map((item) => {
          return <h2 key={item.id}>{item.name}</h2>;
        })}
      </div>
    );
  }
}
