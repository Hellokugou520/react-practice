import React, { Component } from "react";

export default class Detail extends Component {
  state = {
    messageDetail: [
      { id: "01", content: "今日热点" },
      { id: "02", content: "微博热榜" },
      { id: "03", content: "百度指数" },
    ],
  };
  render() {
    console.log(this.props);
    const { id, title } = this.props.match.params;
    const content = this.state.messageDetail.find((item) => {
      return item.id === id;
    });
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{content.content}</li>
      </ul>
    );
  }
}
