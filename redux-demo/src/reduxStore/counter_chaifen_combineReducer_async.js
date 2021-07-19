/**
 ** Created By wangchunyan on 2021/7/17
 * 异步请求数据
 */
import {createStore} from "redux";

const reducer=(state={
    page:1,
    list:[]
},action)=>{
    switch (action.type){
        case 'list/add':
            return{
                ...state,
                list: action.list
            }
        case 'list/prev':
            return{
                ...state,
                page:state.page>1? state.page-1:1
            }
        case 'list/next':
            return{
                ...state,
                page:state.page+1
            }

        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;