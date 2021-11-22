import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    message: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };
  render() {
    const { message } = this.state;
    return (
      <div>
        <ul>
          {message.map((item) => {
            return (
              <li key={item.id}>
                {/* 一、传递params参数 */}
                {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                  {item.title}
                </Link> */}
                {/* 二、传递search参数 */}
                <Link
                  to={`/home/message/detail?id=${item.id}&title=${item.title}`}
                >
                  {item.title}
                </Link>
                &nbsp;&nbsp;
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 一、声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

        {/* 二、search参数无需声明接收，正常注册路由即可 */}
        <Route path="/home/message/detail" component={Detail} />
      </div>
    );
  }
}
