import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Search extends Component {
  search = async () => {
    // 此处的写法是连续解构赋值+重命名
    const {
      keywordEle: { value: keyword },
    } = this;
    // 发布消息
    PubSub.publish("changeState", { isFirst: false, isLoading: true, err: "" });
    if (keyword) {
      // 用axios发送网络请求
      // axios.get(`/api/search/users2?q=${keyword}`).then(
      //   (res) => {
      //     console.log("成功", res.data);
      //     PubSub.publish("changeState", {
      //       userList: res.data.items,
      //       isLoading: false,
      //     });
      //   },
      //   (err) => {
      //     console.log("失败", err);
      //     PubSub.publish("changeState", { isLoading: false, err: err.message });
      //   }
      // );

      // 用fetch发送网络请求(未优化)
      // fetch(`/api/search/users2?q=${keyword}`)
      //   .then(
      //     (res) => {
      //       console.log("联系服务器成功", res);
      //       return res.json();
      //     },
      //     (err) => {
      //       console.log("联系服务器失败", err);
      //       return new Promise(() => {});
      //     }
      //   )
      //   .then(
      //     (res) => {
      //       console.log("获取数据成功", res);
      //     },
      //     (err) => {
      //       console.log("获取数据失败", err);
      //     }
      //   );

      // 用fetch发送网络请求(优化)
      try {
        const res = await fetch(`/api/search/users2?q=${keyword}`);
        const data = await res.json();
        console.log(data);
        PubSub.publish("changeState", {
          userList: data.items,
          isLoading: false,
        });
      } catch (err) {
        console.log("请求出错", err);
        PubSub.publish("changeState", { isLoading: false, err: err.message });
      }
    } else {
      PubSub.publish("changeState", { userList: [], isFirst: true });
    }
  };

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
}
