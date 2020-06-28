/*
* es6 属性简写
* */
let x = 1;
let y = 2;
let z = 5;
let obj = {
    x: x,
    y,//x与y,是等同的，es5跟6的不同写法
    [z]: 6,//动态key
    [x + z]: 8,//key可以是动态表达式
    hello: function () {
        console.log('es5')
    },
    hello1() {
        console.log('es6 常规函数')
    },
    * hello2() {
        console.log('es6 异步函数写法')
    }
};
obj.hello();
obj.hello1();
obj.hello2();

/*
* set
* 接收对象是可遍历对象
* */
// let s = new Set([{name:'wcy',age:15},{name:'tyy',age:3}]);
let s = new Set(['wcy', 'tyy']);
console.log(s.entries())
console.log(s.keys())
console.log(s.values())
s.forEach((item) => console.log(item))

/*
* Map
* */

/*
* 数据赋值
* */
/*const target = {};
const source = {a:1,b:4};
Object.assign(target,source);
console.log(target)*/

/*const target = {c:3,a:4,b:7};
const source = {a:1,b:4};
console.log(Object.assign(target,source))*/

/*const target = {a:1,b:3};
const source = undefined;
console.log(Object.assign(target,source))*/

const target =
    {
        a: {
            b: {
                c: 5
            }
        }
    }
;
const source = undefined;
console.log(Object.assign(target,source));

//assign 实现的是浅复制，会改变target的结构，想要实现深拷贝可以递归使用assign


/*
* 目标对象传入是undefined和null会怎么？  报异常，cannot convert undefined or null to Object
* 源对象的参数是undefined和null会怎样?   正常assign,结果是target的值
* 目标对象是嵌套的对象，子对象的属性会被覆盖吗?  会
*
* */
