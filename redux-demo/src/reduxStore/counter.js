/**
 ** Created By wangchunyan on 2021/7/17
 */
import {createStore} from "redux";

const counter = (state={
    num:10,
    total:10
},action)=>{
    switch (action.type){
        case 'num/add':
            return {
                ...state,
                num:state.num + 1
            }
        case 'num/sub':
            return {
                ...state,
                num:state.num - 1
            }
        case 'total/add':
            return {
                ...state,
                total:state.total + 10
            }
        case 'total/sub':
            return {
                ...state,
                total:state.total - 10
            }
        default:
            return state;
    }
}
const store = createStore(counter);
export default store;