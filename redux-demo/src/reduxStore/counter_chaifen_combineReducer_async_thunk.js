/**
 ** Created By wangchunyan on 2021/7/17
 * 异步请求数据
 */
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';

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

const store = createStore(reducer,applyMiddleware(thunk));
export default store;

/*
* 无中间件： a->b dispatch->reducer
* 有中间件：a->中间件->b dispatch->中间件->reducer
*
* thunk 可以使dispatch接收一个值为函数的action
*
* dispatch的值
* 1.对象 dispatch->reducer
*
* 2.函数  dispatch->执行该函数->reducer
* */