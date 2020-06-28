/*
* es10
* */

// JSON.stringify()

/*
* 数组扁平化输出
* */
/*let arr = [1,2,[4,5],[[6],[[[7]]]]];
let arr1 = [3,4,5]
console.log(arr.flat(5))
console.log(arr1.flatMap(item=>[item*2]));

let str = '        sss         ';
console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimRight())
console.log(str.trimLeft())
console.log(str.trimStart())*/


/*
* 数组跟object 转化
* */
/*
const arr = [['foo',1],['bar',2]];
const obj = Object.fromEntries(arr);
console.log(obj)*/

/*
* 只需要下列obj中key长度小于5的
* 1.先通过Object.entries(obj)转数组
* 2.用数组的filter过滤数据
* 3.数组再转成对象
* */
const obj = {
    ceshi:1,
    sudan:3,
    wangljfs:5
};

let arr = Object.entries(obj).filter(([key,val])=> key.length<6);

// console.log(arr)
// console.log(Object.fromEntries(arr))

/*
* try catch增强
*可以不用cache(e)
* */
try{

}catch (e) {

}

try{

}catch{

}

/*
* 超过2^53次方是bigInt   const a = 11n;//n标识bigInt
* */

// vue create projectName