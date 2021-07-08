# context
跨组件传值的一种方式

## 如何使用
1.React.createContext(); 创建一个上下文，返回Provider、Consumer组件
2.在需要传值的地方用Provider包裹父组件，通过Provider value属性向子组件传递属性（方法，变量）
3.接收 
    3.1 Consumer组件包裹要获取父组件值的组件，方式为Consumer接收一个差值表达式，内部调用方法，接收Provider 传递的value值，再return 要渲染的子组件。
    3.2 子组件调用静态属性static contextType = myContext; ,然后在组件内部就可以使用this.myContext变量，里面就包含了Provider传递的value值

## 多个context
创建多个context使用
