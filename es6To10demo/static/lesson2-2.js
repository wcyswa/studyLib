//数组，对象遍历
const obj = {
    A:[2,3,4],
    B:[4,5,6,7],
    C:[0.1,0.3,0.5]
};

for(let key in obj){
    console.log(obj[key])
}

//修改默认的遍历机制
// for(let key of obj){
//     console.log(key)
// }

//伪数组转换
//1.es5
// let args0 = [].slice.call(arguments);
//
// let args1 = [].slice.call(document.querySelectorAll('img'));
//
// //2.es6
// let args2 = Array.from(arguments);
// let args3 = Array.from(document.querySelectorAll('img'));

//1.es5生成已知长度的数组
//第一种
let arr = Array(5);
//第二种
let arr2 = ['','']
arr.forEach(function (item) {
    item = 1;
})
console.log(arr,'数组')

//es6 初始化数组
//Array.prototype.from
let arr1 = Array.from({length:4},function () {
return 1;
});
console.log(arr1,'遍历')

//es6 生成新数组
let arr3 = Array.of(1,2,3)
console.log(arr3,'arrayOf')

// Array.prototype.fill();
let arr4 = Array(5).fill(1,2,3);
console.log(arr4,'arrayFill')

/**
 * 数组查找
 * */
let arr5 = [1,2,3,4,5]
//es5查找
/*
* filter 查找整个数组，得到集合
* 关注所有值
* */

let find = arr5.filter(function (item) {
return item ===4
});

console.log(find,'filter')
//es6查找
/*
* find 找到符合的元素就不查找了
* 确定：不能找到位置
* */
let find1 = arr5.find(function (item) {
return item === 3;
})
console.log(find1,'find')

/*
* findIndex
* */
let find2 = arr5.findIndex(function (item) {
    return item === 3;
})
console.log(find2,'find')

//数组总结：遍历，转换，生成，查找
/*
* 1.js中有哪些元素可遍历
* 2.如何给数据结构自定义遍历
* 3.find 和 filter有什么区别
* */