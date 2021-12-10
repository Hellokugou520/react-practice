import React, { Component, createContext } from "react";
import "./index.css";

const MyInfo = createContext();
const { Provider, Consumer } = MyInfo;
export default class A extends Component {
  state = { name: "Bpoi", age: 20 };
  render() {
    return (
      <div className="A">
        <h2>A组件</h2>
        {/* 通过Provider标签传递数据给所有后代组件，但是需要声明接收才能拿到这份数据 */}
        <Provider value={this.state}>
          <B />
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="B">
        <h2>B组件</h2>
        <C />
      </div>
    );
  }
}

// 类组件的写法
// class C extends Component {
//   // 声明接收context
//   static contextType = MyInfo;
//   render() {
//     const { name, age } = this.context;
//     return (
//       <div className="C">
//         <h2>C组件</h2>
//         <span>
//           A组件的数据：【姓名：{name}，年龄：{age}】
//         </span>
//       </div>
//     );
//   }
// }

// 适用于类组件和函数式组件的写法
function C() {
  return (
    <div className="C">
      <h2>C组件</h2>
      <Consumer>
        {(value) => {
          const { name, age } = value;
          return (
            <span>
              A组件的数据：【姓名：{name}，年龄：{age}】
            </span>
          );
        }}
      </Consumer>
    </div>
  );
}
