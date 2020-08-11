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

function getNameDecorator(target: any, key: string,descriptor:PropertyDescriptor) {
    // console.log(target, key, '方法装饰器')
    descriptor.writable = true;
    descriptor.value='测试'
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