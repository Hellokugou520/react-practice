import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input
            ref={(e) => (this.keywordEle = e)}
            type="text"
            placeholder="输入关键词点击搜索"
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }

  search = () => {
    // 此处的写法是连续解构赋值+重命名
    const {
      keywordEle: { value: keyword },
    } = this;
    if (keyword) {
      // 做了代理，通过代理转发请求，http://localhost:3000可以省略不写
      axios.get(`/api/search/users?q=${keyword}`).then(
        (res) => {
          console.log("成功", res.data);
        },
        (err) => {
          console.log("失败", err);
        }
      );
    }
  };
}
