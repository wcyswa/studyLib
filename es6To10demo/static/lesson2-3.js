/*
* 类
* 语法糖：语法不一样但是本质一样
* */
/*
* es5方法实现
* */
let Animal = function (type) {
    this.type = type;
    /*1.*/
    // this.eat = function () {
    //     console.log(this.type+' eat something')
    // }
};

/*2.*/
Animal.prototype.eat = function () {
    console.log('吃水果')
};


let dog = new Animal('dog');
let monkey = new Animal('monkey');
console.log(dog, typeof dog)
//1.并不能改变父类的方法
// monkey.eat=function(){
//     console.log('吃香蕉')
// };

//2.将方法放在父类的原型链上去做修改
monkey.constructor.prototype.eat = function () {
    console.log('吃中国东西')
};

dog.eat();
monkey.eat();

console.log(typeof Animal, 'animal')

/*
* es6 类实现
* */

let _age = 3;

class Animal1 {
    constructor(type) {
        this.type = type;
    }

    eat() {
        console.log(this.type + ' 吃草')
    }

    get age() {
        return _age;
    }

    //set 方法只能说明可以修改属性值
    set age(val) {
        if (val > 3 && val < 9) {
            _age = val;
        }
    }
}

let dog1 = new Animal1('dog');
let monkey1 = new Animal1('monkey');

dog1.eat = function () {
    console.log('不吃')
}

dog1.eat();
monkey1.eat();

console.log(typeof Animal1, 'animal1')
console.log(dog1.age, 'get 方法')

dog1.age = 6;
console.log(dog1.age, 'age 修改后')
console.log(_age, '能', dog1._age,)

/*
*类的静态方法:类方法或者叫静态方法
* 类的继承：es5原型链赋值，es6 extend
* 函数的默认值：
* 1.参数的默认值可以是其他参数的表达式；
* 2.不使用默认参数可以函数传递‘undefined’;
* 3.函数内部的参数长度，arguments.length,但是es6不推荐使用arguments;
* 4.es6使用functionName.length获取没有默认参数的参数个数
* 5.es6 使用...rest参数，可以获取参数个数，也用来处理不确定参数
*
* */


/*
* es5声明函数
* 箭头函数的this问题，是由于webpack构建中evel函数的作用
* 1.如何用箭头函数实现一个排序
* 2.箭头函数中this的作用
*
* */
function fun1() {
}

let fun2 = function () {
}

/*
* es6新增函数->箭头函数
* */
let hello = (para1, para2) => {

};

//有且只有一个参数
let hello1 = name => {
    console.log('有且只有一个参数，可以省略小括号')
};

//箭头后面是个表达式,可以省略花括号和表达式
let sum = (x,y,z)=>x+y+z;

//箭头后面直接小括号的是返回的值,省略return
let sumXYZ = (x,y,z)=>({
    x:x,y:y,z:z,
})

console.log(sumXYZ(1,2,3),'箭头函数')