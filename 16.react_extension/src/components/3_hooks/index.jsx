import React from "react";

export default function Demo() {
  const [count, setCount] = React.useState(0);
  function add() {
    setCount((count) => count + 1);
  }
  return (
    <div>
      <h2>当前次数：{count}</h2>
      <button onClick={add}>次数+1</button>
    </div>
  );
}
