import React, { Component } from "react";
// qs上的parse和stringify方法处理urlencoded形式的参数
// import qs from "querystring";

export default class Detail extends Component {
  state = {
    messageDetail: [
      { id: "01", content: "今日热点" },
      { id: "02", content: "微博热榜" },
      { id: "03", content: "百度指数" },
    ],
  };
  render() {
    // 一、在props.match中拿到params参数
    // const { id, title } = this.props.match.params;

    // 二、在props.location中拿到search参数
    // const { search } = this.props.location;
    // const { id, title } = qs.parse(search.slice(1));

    // 三、在props.location中拿到search参数
    const { id, title } = this.props.location.state || {};
    const content =
      this.state.messageDetail.find((item) => {
        return item.id === id;
      }) || {};
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{content.content}</li>
      </ul>
    );
  }
}
