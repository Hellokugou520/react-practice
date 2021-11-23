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
  // push跳转
  pushShow = (id, title) => {
    // 一、params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`);

    // 二、search参数
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);

    // 三、state参数
    this.props.history.push("/home/message/detail", { id, title });
  };
  // replace跳转
  replaceShow = (id, title) => {
    // 一、params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`);

    // 二、search参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`);

    // 三、state参数
    this.props.history.replace("/home/message/detail", { id, title });
  };
  // 回退
  goBack = () => {
    this.props.history.goBack();
  };
  // 前进
  goForward = () => {
    this.props.history.goForward();
  };
  // 指定前进或回退几步(正数前进，负数回退)
  go = () => {
    this.props.history.go(2);
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
                {/* <Link
                  to={`/home/message/detail?id=${item.id}&title=${item.title}`}
                >
                  {item.title}
                </Link> */}
                {/* 三、传递state参数 */}
                <Link
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: item.id, title: item.title },
                  }}
                >
                  {item.title}
                </Link>
                &nbsp;
                <button
                  onClick={() => {
                    this.pushShow(item.id, item.title);
                  }}
                >
                  push查看
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    this.replaceShow(item.id, item.title);
                  }}
                >
                  replace查看
                </button>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 一、声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
        {/* 二、search参数无需声明接收，正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
        {/* 三、state参数无需声明接收，正常注册路由即可 */}
        <Route path="/home/message/detail" component={Detail} />
        <button onClick={this.goBack}>goBack</button>&nbsp;
        <button onClick={this.goForward}>goForward</button>&nbsp;
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}
