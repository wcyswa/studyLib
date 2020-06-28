第一节
1.安装node环境
2.node -v 验证是否安装成功
3.不成功卸载重新安装
4.npm 和npx安装完node 就有了
5.npx es10-cli create projectName
6.cd projectName
7.npm start

第二节
1.let、const、作用域
    全局作用域
    函数作用域
    动态作用域
    块状作用域

    tips:函数作用域链是向上查找。var 存在变量提升，要尽量使用let
    
    全局变量：在任何位置都可以拿到，但是eslint会导致webpack构建失败
    var a = 123;//全局变量，不可以被删除
    b=234;//window的属性，可以被删除；无论定义在函数内外，只要没有使用类型定义，都是window属性，作用域是全局的
    
    局部作用域 也叫 函数作用域
    场景：有的时候想在函数外部访问函数内部的变量
    1.return 返回
    function test(){
        var a = 0;
        return a;
    }
    2.闭包实现
    function test(){
        var a = 9;
        function test2(){
            return a;
        }
        return test2;
    }
    
    块状作用域 {}之间的
    
    动态作用域
    window.a = 3;
    function test(){
        console.log(this.a)
    }
    test();
    test.bind({a:100})();
    
 let、var 定义的全局变量的区别 
 let定义的不能通过window. 访问，不允许重复定义，不会变量提升 ，而var会
 
 const
 值不能修改，声明必须初始化     
 
 2.Array
    1>遍历
    for循环：繁琐，但是可以break,continue
    forEach:相比for循环简洁，但是不能退出循环
    every:可以通过return false退出循环
    for in:为Object设计的，数组是对象，遍历数组时，索引可以是字符串，当索引比较时用 == 而不是 ===，因为for in的索引是字符串
    for of:初了能遍历数组和Object，也可以遍历其它可遍历的数据结构，即自定义数据结构
    
    2>数组转换
    ES5将伪数组转成数组的做法，及ES6的做法
    1.let args = [].slice.call(arguments);//arguments是伪数组
      let imgs = [].slice.call(document.querySelectorAll('img'));
    2.let args = Array.from(arguments);
      let imgs = Array.from(document.querySelectorAll('img'));     
      
    伪数组：具备条件：1.存储的数据具有索引 || 2.有length属性；eg:{length:4}
      
    Array.prototype.from(arrayLike,mapFn,thisArg) 的其它作用
        初始化一个长度为5，全部为1的数组
        Array.from({lenght:5},function(){return 1})  
        
    3>生成新数组
        let array = Array(5);
        Array.prototype.of(val1,val2,val3,...)   let array = Array.of(1,2,3);
        Array.prototype.fill(value,start,end)    let array = Array(5).fill(8);
        
    4>查找
    filter:查找所有符合要求的数据
    find:查找满足条件的第一个值
    findIndex：查找满足条件的第一个值得索引
 
3.类Class
     
  
    