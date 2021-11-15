import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  state = { userList: [] };

  searchUsers = (userList) => {
    this.setState({ userList });
  };

  render() {
    return (
      <div className="container">
        <Search searchUsers={this.searchUsers} />
        <List userList={this.state.userList} />
      </div>
    );
  }
}
