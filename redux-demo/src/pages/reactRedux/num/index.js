/**
 ** Created By wangchunyan on 2021/7/17
 * 作为子组件调用store
 * 使用connect函数，接收一个select函数，用来返回选择store中的state值，connect返回的是一个高阶组件，调用高阶组件，传入原来的函数，包装完state，返回新的组件。
 */

import React from "react";
import {connect} from "react-redux";

class Num extends React.Component{
    render() {
        const {num, dispatch} = this.props;
        console.log(this.props, '传参变化 num')
        return <div>
            <button onClick={()=>{dispatch({type:'num/add'})}}>num 增加</button>
                <span>
                    {`num值：${num}`}
                </span>
            <button onClick={()=>{dispatch({type:'num/sub'})}}>num 减少</button>
        </div>
    }
}
const withConnect = connect(state=>{
    return {
        num: state.num
    }
})
const NewNum = withConnect(Num)
export default NewNum;

// 简写形式
// export default connect(state=>({num: state.total}))(Num)
