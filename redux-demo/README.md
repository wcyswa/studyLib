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

# redux
所有state都以一个对象树的形式存储在一个单一的store中，唯一改变state的办法是触发action,一个描述发生什么的对象。描述action如何改变state树就需要编写reducers.


# hooks
useCallback(fn, deps) 相当于 useMemo(() => fn, deps)

## useMemo
1.返回属性值，类似于mobx 的@computed,会生成一个新的值，父组件更新，值没有变化，则不会触发子组件更新
2.子组件需要被memo函数调用，才可以完成这项优化。

useMemo的函数会在渲染期间执行，不要在这个函数内部执行与渲染无关的操作，比如副作用这类的操作属于useEffect的适用范畴，而不是useMemo.
你可以把 useMemo 作为性能优化的手段，但不要把它当成语义上的保证
正确使用方式：
先编写在没有 useMemo 的情况下也可以执行的代码 —— 之后再在你的代码中添加 useMemo，以达到优化性能的目的。

## useCallback
1.接收函数、依赖项，返回一个新函数，新函数可以作为子组件的回调函数往下传递，只有依赖项发生变化，且返回的函数有变化时，才触发子组件更新
2.同样也需要子组件被memo调用才可以。

js引擎是单线程的

对前端来说，解决页面阻塞有三个方向
1.优化每个任务，让他能有多快有多快，挤压cpu运算量  （vue）
2.快速响应用户，让用户觉得够快，不阻塞用户交互 (react)
3.尝试worker多线程

react 15
在这里面 React 会递归比对VirtualDOM树，找出需要变动的节点，然后同步更新它们, 一气呵成。
这个过程 React 称为 Reconcilation(中文可以译为协调).

缺点：
1.用户触发事件得不到响应
2.导致掉帧，用户能感受到卡顿
3.递归调用栈，不能随意中断，很难被恢复，不利于异步处理。这种调用栈不是程序所能控制的，要恢复递归现场，可能需要从头开始，恢复到之前的调用栈。


react fiber
所以 React 通过Fiber 架构，让自己的Reconcilation 过程变成可被中断。 
'适时'地让出CPU执行权，除了可以让浏览器及时地响应用户的交互，还有其他好处:
1.与其一次性操作大量 DOM 节点相比, 分批延时对DOM进行操作，可以得到更好的用户体验。
2.给浏览器一点喘息的机会，他会对代码进行编译优化（JIT）及进行热代码优化，或者对reflow进行修正.

fiber是一种身份的对调
1.以前代码是老大，想怎么执行就怎么执行，执行多久都行
2.现在为了共同的用户体验统一了战线，一切听浏览器指挥调度，浏览器是老大，我们需要跟浏览器申请执行权限，并且还是有期限的，到期后要按
约定归还给浏览器。
* 当然你超时不还，浏览器也没招。

fiber 将递归转化成迭代
1.使用链表，每个virtualDOM节点内部使用Fiber表示 
使用链表只是一个结果，不是目的，react一开始的目的是冲着模拟调用栈去的。
2.fiber就是所说的工作单元，performUnitOfWork负责对fiber进行操作，并按照深度优先遍历的顺序返回下一个fiber.
3.因为采用了链表结构，即使流程被中断，我们随时可以从上次未处理完的fiber继续遍历下去


fiber存在的一些问题
1.协调阶段（可以认为是diff阶段）,可以被中断、恢复、甚至重做，react协调阶段的生命周期钩子可能会被多次调用，
eg:componentWillMount可能会被调用两次。
因此，协调阶段的生命周期钩子不要包含副作用，索性react就废弃了这些可能包含副作用的生命周期方法。


协调阶段的生命周期钩子
constructor
componentWillMount 废弃
componentWillReceiveProps 废弃
static getDerivedStateFromProps
shouldComponentUpdate
componentWillUpdate 废弃
render

提交阶段
getSnapshotBeforeUpdate() 严格来说，这个是在进入 commit 阶段前调用
componentDidMount
componentDidUpdate
componentWillUnmount

你可以将 WIP 树想象成从旧树中 Fork 出来的功能分支，你在这新分支中添加或移除特性，即使是操作失误也不会影响旧的分支。
当你这个分支经过了测试和完善，就可以合并到旧分支，将其替换掉. 这或许就是’提交(commit)阶段‘的提交一词的来源吧？:

fiber中断和恢复
1.react 得到控制权后，优先处理高优先级任务。也就是说中断时候正在处理的任务，
恢复时会让位给高优先级任务，原本中断的任务可能会被放弃或者重做。

存在问题：
但是如果不按顺序执行任务，可能会导致前后的状态不一致。 
比如低优先级任务将 a 设置为0，而高优先级任务将 a 递增1, 两个任务的执行顺序会影响最终的渲染结果。
因此要让高优先级任务插队, 首先要保证状态更新的时序。
解决方法：
所有更新任务按照顺序插入一个队列, 状态必须按照插入顺序进行计算，但任务可以按优先级顺序执行,

为了保证视图的最终一致性, 所有更新任务都要被执行。

React Fiber 本质上是为了解决 React 更新低效率的问题，不要期望 Fiber 能给你现有应用带来质的提升, 
如果性能问题是自己造成的，自己的锅还是得自己背.

开启Concurrent Mode的好处
1.快速响应用户操作和输入，提升用户交互体验
2.让动画更加流畅，通过调度，可以让应用保持高帧率
3.利用好I/O 操作空闲期或者CPU空闲期，进行一些预渲染。 比如离屏(offscreen)不可见的内容，优先级最低，可以让 React 等到CPU空闲时才去渲染这部分内容。这和浏览器的preload等预加载技术差不多。
4.用Suspense 降低加载状态(load state)的优先级，减少闪屏。 比如数据很快返回时，可以不必显示加载状态，而是直接显示出来，避免闪屏；如果超时没有返回才显式加载状态

