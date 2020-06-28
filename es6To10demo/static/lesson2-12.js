/*

function  loop() {
 for (let i =0;i<5;i++){
     console.log(i)
 }
}
loop();*/

/*
* Generator的定义方法，有几个点值得注意
* 1.比普通函数多一个*
* 2.函数内部用yield来控制程序的执行的“暂停“
* 3.函数的返回值通过调用next来‘恢复’程序执行
* */


function * loop() {
    for (let i =0;i<5;i++){
     yield console.log(i)
    }
}
let l = loop();
l.next();
l.next();
l.next();
l.next();
l.next();
l.next();