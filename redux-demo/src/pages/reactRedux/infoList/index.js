/**
 ** Created By wangchunyan on 2021/7/17
 */

import React, {useEffect} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import axios from 'axios'

const Item = ({item:{title}})=>{
    return(
        <div>{title}</div>
    )
}

const InfoList = ()=>{

    const {list,page} = useSelector(state=>state);
    const dispatch = useDispatch();
    useEffect(()=>{
        axios.get(`https://cnodejs.org/api/v1/topics?page=${page}&limit=3`).then(res=>{
            dispatch({type:'list/add',list:res.data.data});
        })
    },[page])
    return(
        <div>
            <h3>异步获取数据</h3>
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
export default InfoList;