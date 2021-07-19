/**
 ** Created By wangchunyan on 2021/7/17
 * 作为子组件调用store
 * 使用connect函数，接收一个select函数，用来返回选择store中的state值，connect返回的是一个高阶组件，调用高阶组件，传入原来的函数，包装完state，返回新的组件。
 */

import React from "react";
import {useDispatch, useSelector} from "react-redux";

const Total =()=>{
    const total = useSelector(state=> state.total);
    const dispatch = useDispatch();
    return <div>
        <button onClick={()=>{dispatch({type:'total/add'})}}>total 增加</button>
        <span>
                    {`total值：${total}`}
                </span>
        <button onClick={()=>{dispatch({type:'total/sub'})}}>total 减少</button>
    </div>
}

// 简写形式
export default Total;