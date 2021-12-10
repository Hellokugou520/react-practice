import React, { Fragment } from "react";

// 短语法：Fragment都不用写，直接写<></>标签即可，但是这种写法不支持写key属性
export default function Demo() {
  return (
    <Fragment>
      <input type="text" />
      <input type="text" />
    </Fragment>
  );
}
