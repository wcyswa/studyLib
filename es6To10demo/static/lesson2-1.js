var test = 'abc';

test2 = '围巾';

function testFun() {
    test1 = '函数内未定义的变量';
    var test3 = '先声明了';
}

testFun();

(function () {
    for (var i = 0; i < 30; i++) {
        // console.log(i,'前')
        setTimeout(function () {
            console.log(i)
        }, 1000)
        // console.log(i,'后')
    }

    console.log(a)
    let a = 9;
})();

//笔记
// 全局作用域：变量在函数和代码块之外定义，则为全局作用域。但是，在函数或代码块之内未定义的变量，也拥有全局作用域。

// var car1 = 'test1';
// function myFun(){
//     car2 = 'test2'
// }

// car1，可以在任意地方被读取修改，但是不能删除
// car2,也拥有跟car1一样的全局权限，但是作为window，global的属性存在可以被删除，delete car2 或者delete window.car2;

// let & const
// 1.let 声明有块级作用域
// 2.let声明的全局变量不是全局对象的属性，不能用window.a 访问
// 3.重复定义会抛出语法错误
// 4.不会进行变量提升

