/*
* 解构赋值
* 1.通过空格跳过变量赋值
* 2.[]是语法规定，等号右边只要是可遍历对象就可以
* */
let arr = ['hell','oo!'];
let [first,,second] = arr;
console.log(first,second);

let user = {name:'s',subname:'t'};
[user.name,user.subname] = [1,3]
console.log(user)