# context
跨组件传值的一种方式

## 如何使用
1.React.createContext(); 创建一个上下文，返回Provider、Consumer组件
2.在需要传值的地方用Provider包裹父组件，通过Provider value属性向子组件传递属性（方法，变量）
3.接收 
    3.1 Consumer组件包裹要获取父组件值的组件，方式为Consumer接收一个差值表达式，内部调用方法，接收Provider 传递的value值，再return 要渲染的子组件。
    3.2 子组件调用静态属性static contextType = myContext; ,然后在组件内部就可以使用this.myContext变量，里面就包含了Provider传递的value值
    3.3 hook 中可以使用useContext(context) 去接收传递的值 // 只是让你能够读取context的值，以及订阅context的变化
## 多个context
创建多个context使用

## 缺点
需要组件包裹，如果涉及多个context，则需要嵌套包裹或者至少包裹一次。

## context原理
组件通过自上而下的数据源进行更新，由setState触发组件的更新机制

# redux

所有state都以一个对象树的形式存储在一个单一的store中，唯一改变state的办法是触发action,一个描述发生什么的对象。描述action如何改变state树就需要编写reducers.

## redux 运行过程
1.创建store,store仓库用来对数据进行管理 
 getState: f getState 获取当前存放在 store 中的状态
 dispatch: f dispatch(action) 发起状态修改指令，store 会调用 reducer 函数，reducer 获取当前的 action 之后，需要根据 action 来映射出新的 state。【同步方法】
 replaceReducer: f 替换 原来的reducer
 subscribe: f 监听 state 改变，返回值是一个取消监听的方法，调用以后不再监听 state 值的变化。

2.reducer 纯函数，用来修改状态，在redux中只能使用reducer修改状态
 * 最后默认一定要将state值传出，否则拿不到初始化的state
 state：当前状态
 action 对状态的修改指令
 默认情况下 action 是一个对象，由 type 属性和 payload 属性组成，type 标注要对 state 做出何种修改，payload 是可选的附加参数(可以是一个或多个，除了type以外的都是payload)

## redux 结合 react 使用
1.import {Provider} from "react-redux";
<Provider store={counterStore}>

2.组件中使用state,dispatch的两种方式
  2.1 connect:适用于类组件和函数组件中
    connect是一个普通函数，调用是传入一个select函数，返回一个withConnect高阶组件
    select 用于选择store状态中我们需要的部分，返回值必须是对象
  2.2 hooks: react-redux提供的hooks 
    useDispatch
    useStore
    useSelector

## redux三大原则
1.单一数据源，一个项目只能有一个
2.state只读，唯一能修改state的就是action
3.使用纯函数来执行修改，映射出新的state

## !使用redux时候，action.type全局唯一

### reducer拆分 -- 手动拆分
### reducer拆分 -- combineReducer
### reducer拆分+异步请求数据  -- 异步请求数据
### reducer拆分+异步请求数据更简洁 -- thunk
