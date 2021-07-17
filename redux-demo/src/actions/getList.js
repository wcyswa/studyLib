/**
 ** Created By wangchunyan on 2021/7/17
 */
import axios from "axios";

export function getList(dispatch,getState){
    const {page} = getState();
    axios.get(`https://cnodejs.org/api/v1/topics?page=${page}&limit=3`).then(res=>{
        dispatch({type:'list/add',list:res.data.data});
    })
}