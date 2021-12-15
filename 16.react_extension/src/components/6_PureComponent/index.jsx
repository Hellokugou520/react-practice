import React, { PureComponent } from "react";
import "./index.css";

/**
 * React.PureComponent 与 React.Component 很相似。两者的区别在于 React.Component 并未
 * 实现 shouldComponentUpdate()，而 React.PureComponent 中以浅层对比 prop 和 state 的
 * 方式来实现了该函数。
 */
export default class A extends PureComponent {
  state = { game: "巫师" };
  change = () => {
    this.setState({ game: "地铁" });
  };
  // shouldComponentUpdate(nextProps, nextState) {
  //   return !(nextState.game === this.state.game);
  // }
  render() {
    console.log("父组件-render");
    return (
      <div className="parent">
        <h2>父组件</h2>
        <h3>{this.state.game}</h3>
        <button onClick={this.change}>换新游戏</button>
        <B game={this.state.game} />
      </div>
    );
  }
}

class B extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return !(nextProps.game === this.props.game);
  // }
  render() {
    console.log("子组件-render");
    return (
      <div className="children">
        <h2>子组件</h2>
        <h3>{this.props.game}</h3>
      </div>
    );
  }
}
