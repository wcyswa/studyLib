/**
 * create by wangchunyan1 on 2021/7/8
 * 1.state 变复杂
 * 2.dispatch payload附加参数
 * 3.监听store变化
 * 4.取消监听
 */
import { createStore } from 'redux'

function counter1(state=[{name:'fsd', subjects:['99']}],action){
    // console.log(action, '动作内容2')
    switch (action.type ){
        case 'add':
            return [...state,action.student];
        case 'modify':
            return state.map(item=>{
                if(item.name === action.name){
                    item.subjects.push(action.subject);
                }
                return item;
            })
        default:
            return state;
    }
}
const counter2 = (state=[{name:'fsd', subjects:['99']}],action)=>{
    // console.log(action, '动作内容2')
    switch (action.type ){
        case 'add':
            return [...state,action.student];
        case 'modify':
            return state.map(item=>{
                if(item.name === action.name){
                    item.subjects.push(action.subject);
                }
                return item;
            })
        default:
            return state;
    }
}

const store = createStore(counter1);
console.log(store.getState(), '是拿不到state初始化值吗？')

const unsubscribe = store.subscribe(()=>{
    // console.log(store.getState(), '监听state变化')
})
store.dispatch({type:'add',student:{name:'labuladong',subjects:['英语','政治']}})
console.log(store.getState(),'store state内容');
// unsubscribe();
store.dispatch({type:'add',student:{name:'wcy',subjects:['滑雪','游泳']}})
store.dispatch({type:'modify',name:'labuladong',subject:'化学'})
store.dispatch({type:'modify',name:'labuladong',subject:'化学'})
