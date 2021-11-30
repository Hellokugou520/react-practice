// 引入Count的UI组件
import CountUI from "../../components/Count";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";
import {
  addAction,
  reduceAction,
  addAsyncAction,
} from "../../redux/count_action";

const mapStateToProps = (state) => {
  return { count: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (data) => dispatch(addAction(data)),
    reduce: (data) => dispatch(reduceAction(data)),
    addAsync: (data, time) => dispatch(addAsyncAction(data, time)),
  };
};

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
