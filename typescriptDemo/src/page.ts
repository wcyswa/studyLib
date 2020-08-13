//简单的装饰器
function testDecorator(constructor: any) {
    constructor.prototype.getName = () => {
        console.log('大白')
    };
    console.log('decorator')
}

//用function 封装过的装饰器
function testDecorator1(flag: boolean) {
    if (flag) {
        return function (constructor: any) {
            constructor.prototype.getName = () => {
                console.log('大白1')
            };
            console.log('decorator1')
        }
    }
    return function (constructor: any) {

    }
}


// @testDecorator
@testDecorator1(true)
class Test {

}

let test = new Test();
(test as any).getName();

console.log(123)

/*
* 扩展
* */
function testDecorator2<T extends new(...args: any[]) => any>(constructor: T) {
    return class extends constructor {
        name = 'lee'

        getName() {
            return this.name;
        }
    }
}

@testDecorator2
class Test2 {
    name: string;

    constructor(name: string) {
        this.name = name;
        console.log(this.name, '赋值后')
    }
}

const test2 = new Test2('wcy');
console.log(test2.name, '后')
// console.log(test2.getName())  下面的装饰器优化就会解决装饰器方法不能被实例调用的问题

/*
* 解决装饰器方法不能被实例调用的问题
* */
function testDecoratorFactory() {
    return function testDecorator3<T extends new(...args: any[]) => any>(constructor: T) {
        return class extends constructor {
            name = 'lee1'

            getName() {
                return this.name;
            }
        }
    }
}


const Test3 = testDecoratorFactory()(
    class {
        name: string;

        constructor(name: string) {
            this.name = name;
            console.log(this.name, '赋值后')
        }
    }
);


const test3 = new Test3('wcy1');
console.log(test3.name, '后', test3.getName())

/*
* 类里面方法的装饰器
* */

function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    // console.log(target, key, '方法装饰器')
    descriptor.writable = true;
    descriptor.value = '测试'
}

class Test4 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @getNameDecorator
    getName() {
        return this.name
    }
}

const test4 = new Test4('babel');
test4.getName = () => {
    return '字符串';
}
console.log(test4.getName());

/*
* 访问器的装饰器
* */
function visitDecorator1(target: any, key: string, descriptor: PropertyDescriptor) {
    // descriptor.writable = false;
}

class Test5 {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }


    get name() {
        return this._name;
    }

    @visitDecorator1
    set name(name: string) {
        this._name = name;
    }
}

const test5 = new Test5('babel');
test5.name = 'test5 dell';
console.log(test5.name, 'show test5 dell')

/*
* 属性装饰器
* */
function nameDescriptor(target: any, key: string): any {
    const descriptor: PropertyDescriptor = {
        writable: true
    };
    return descriptor;
}

class Test6 {
    @nameDescriptor
    name = 'test6'
}

const test6 = new Test6();
test6.name = 'test62';
console.log(test6.name)

/*
* 参数装饰器
* */
function paramDecorator(target: any, method: string, paramIndex: number) {
    console.log(target, method, paramIndex)
}

class Test7 {
    getInfo(@paramDecorator name: string, @paramDecorator age: number) {//先用修饰符的后修饰
        console.log(name, age)
    }
}

const test7 = new Test7();
test7.getInfo('Test7', 45)

/*
* 装饰器小例子
* 1.参数异常的问题
* */
const userInfo: any = undefined;
/*
* 只能传递出固定的错误信息，不能具体
* */

/*function catchError(target:any,key:string,descriptor:PropertyDescriptor) {
    const fn = descriptor.value;
    console.log(fn,'方法展示');
    descriptor.value = function () {
        try{
            fn();
        }catch (e) {
            console.log('userInfo 存在问题')
        }
    }
}*/

function catchError(msg: string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const fn = descriptor.value;
        console.log(fn, '方法展示');
        descriptor.value = function () {
            try {
                fn();
            } catch (e) {
                console.log(msg)
            }
        }
    }
}


class Test8 {
    @catchError('userInfo.name 存在异常')
    getName() {
        return userInfo.name;
    }

    @catchError('userInfo.age 存在异常')
    getAge() {
        return userInfo.age;
    }
}

const test8 = new Test8();
console.log(test8.getAge(), '年龄')
console.log(test8.getName(), '姓名')