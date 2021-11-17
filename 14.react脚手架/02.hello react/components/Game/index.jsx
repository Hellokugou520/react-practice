import { Component } from "react";
import game from "./index.module.css";

export default class Game extends Component {
  render() {
    return <div className={game.title}>Game</div>;
  }
}
