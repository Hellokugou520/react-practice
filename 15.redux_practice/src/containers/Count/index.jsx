// 引入Count的UI组件
import CountUI from "../../components/Count";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";
import {
  addAction,
  reduceAction,
  addAsyncAction,
} from "../../redux/count_action";

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  (state) => ({ count: state }),
  // mapDispatchToProps的一般写法
  // (dispatch) => ({
  //   add: (data) => dispatch(addAction(data)),
  //   reduce: (data) => dispatch(reduceAction(data)),
  //   addAsync: (data, time) => dispatch(addAsyncAction(data, time)),
  // })

  // mapDispatchToProps的简写
  {
    add: addAction,
    reduce: reduceAction,
    addAsync: addAsyncAction,
  }
)(CountUI);
