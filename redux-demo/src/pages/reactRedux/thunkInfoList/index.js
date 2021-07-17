/**
 ** Created By wangchunyan on 2021/7/17
 */

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getList} from "../../../actions/getList";

const Item = ({item:{title}})=>{
    return(
        <div>{title}</div>
    )
}

const ThunkInfoList = ()=>{

    const {list,page} = useSelector(state=>state);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getList)
    },[page])
    return(
        <div>
            <h3>thunk 异步获取数据</h3>
            {
                list.map(item=>{
                    return <Item key={item.id} item={item}/>
                })
            }
            <button onClick={()=>{dispatch({type:'list/prev'})}}>上一页</button>
            {
                `第${page}页`
            }
            <button onClick={()=>{dispatch({type:'list/next'})}}>下一页</button>
        </div>
    )

}
export default ThunkInfoList;