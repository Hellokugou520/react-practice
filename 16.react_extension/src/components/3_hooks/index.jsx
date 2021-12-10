import React from "react";
import ReactDOM from "react-dom";

export default function Demo() {
  const [count, setCount] = React.useState(0);
  const myInput = React.useRef();
  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  function add() {
    setCount((count) => count + 1);
  }
  function death() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }
  function show() {
    alert(myInput.current.value);
  }
  return (
    <div>
      <h2>当前次数：{count}</h2>
      <input type="text" ref={myInput} />
      <button onClick={add}>次数+1</button>
      <button onClick={death}>销毁组件</button>
      <button onClick={show}>展示输入框数据</button>
    </div>
  );
}
