import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";
import Home from "./pages/Home";
import About from "./pages/About";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 路由有严格匹配和模糊匹配两种匹配模式，默认是模糊匹配 */}
              {/* 在模糊匹配模式下，About可以成功匹配到，但是Home不行，因为匹配对于路由的顺序也有要求 */}
              <MyNavLink to="/about/a/b">About</MyNavLink>
              <MyNavLink to="/a/b/home">Home</MyNavLink>
              {/* 这里是和About一样的写法，但是因为Home开启了严格匹配，路由和路径必须完全一致，导致无法匹配 */}
              <MyNavLink to="/home/a/b">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About} />
                  {/* exact开启严格匹配 */}
                  <Route exact path="/home" component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
