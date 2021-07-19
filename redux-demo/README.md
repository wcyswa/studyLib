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




