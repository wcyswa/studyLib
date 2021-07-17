/**
 ** Created By wangchunyan on 2021/7/17
 */
import {createStore,combineReducers} from "redux";

const num = (num = 0,action)=>{
    switch (action.type){
        case 'num/add':
            return num+1
        case 'num/sub':
            return num-1;
        default:
            return num;
    }
}

const total = (total = 0,action)=>{
    switch (action.type){
        case 'total/add':
            return total+10;
        case 'total/sub':
            return total-10;
        default:
            return  total;
    }
}

const reducer = combineReducers({
    num:num,
    total:total,
})

const store = createStore(reducer);
// console.log(store.getState(), '获取store初始值')
export default store;