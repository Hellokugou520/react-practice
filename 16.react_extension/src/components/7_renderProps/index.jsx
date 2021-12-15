import React, { Component } from "react";
import "./index.css";

export default class Demo extends Component {
  render() {
    return (
      <div className="parent">
        <h2>父组件</h2>
        {/* 1、通过标签体的形式传入 */}
        {/* <A>
          <B />
        </A> */}
        {/* 2、通过标签属性的形式传入 */}
        <A render={(data) => <B game={data} />} />
      </div>
    );
  }
}

class A extends Component {
  state = { game: "孤岛惊魂" };
  render() {
    // console.log(this.props);
    const { game } = this.state;
    return (
      <div className="a">
        <h2>A组件</h2>
        {/* 渲染到指定位置 */}
        {/* {this.props.children} */}
        {this.props.render(game)}
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="b">
        <h2>B组件</h2>
        <span>接收到A组件的数据：{this.props.game}</span>
      </div>
    );
  }
}
