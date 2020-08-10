let num = 89;
console.log(num, '数字')

//主是
let teacher: string = 'wcy'

interface Bird {
    fly: boolean;
    sing: () => {}
}

interface Dog {
    fly: boolean;
    bark: () => {}
}

/*
解决联合类型的问题
* 类型保护的方法
* */

// 1.类型断言的方式
function trainAnimal(animal: Bird | Dog) {
    if (animal.fly) {
        (animal as Bird).sing();//类型断言
    } else {
        (animal as Dog).bark();
    }
}

// 2.in语法来做类型保护
function trainAnimalSecond(animal: Bird | Dog) {
    if ('sing' in animal) {
        animal.sing();
    } else {
        animal.bark();
    }
}

// 3.typeof 语法来做类型保护
function add(x: string | number, y: string | number) {
    if (typeof x === "string" || typeof y === 'string') {
        return `${x}${y}`;
    }
    return x + y;
}

// 4.使用instanceof语法来做类型保护，需要定义为类
class NumberObj {
    countX: number = 0;
}

function add2(x: object | NumberObj, y: object | NumberObj) {
    if (x instanceof NumberObj && y instanceof NumberObj) {
        return x.countX + y.countX;
    }
    return 0;
}


/*
* 枚举类型
* 使用Status[index]，index表示在Status中的赋值index,没有赋值的情况下是默认的索引0,1,2
* */
console.log(1234)

enum Status {
    Offline,
    Online = 4,
    Deleted
}

console.log(Status.Online, '枚举值', Status[4])

function getResult(status: number) {
    if (status === Status.Offline) {
        return 'Offline'
    } else if (status === Status.Online) {
        return 'Online'
    } else if (status === Status.Deleted) {
        return 'Deleted'
    }
    return 'Error'
}

let res = getResult(Status.Deleted)
console.log(res, '枚举')

/*
* 4-5泛型 generic 泛指的类型 <T>来表示
* */
function join<A>(first: A, second: A) {
    return `${first}${second}`
}

function joinOther<A, B>(first: A, second: B) {
    return `${first}${second}`
}

join<string>('fds', '1');
joinOther('2', '2');
joinOther<string, string>('2', '2');

/*
* 4-6类中使用泛型
* */

/*
* 1.使用泛型作为一个具体的类型注解
* */
function hello<T>(params: T) {
    return params;
}

const func: <T>(params: T) => T = hello;

/*
* 定义类的泛型
* */
interface Item {
    name: string
}

class DataManage<T extends Item> {
    constructor(private data: T[]) {
    }

    getItem(index: number): T {
        return this.data[index];
    }
}

const data = new DataManage([{
    name: 'dell'
}])

console.log(data, '数据', data.getItem(0))


/*
* 4.7命名空间
* */

namespace Home{
    class Header {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Header';
            document.body.appendChild(elem);
        }
    }

    class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Content';
            document.body.appendChild(elem);
        }
    }

    class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Footer';
            document.body.appendChild(elem);
        }
    }

    export class Page {
        constructor() {
            new Header();
            new Content();
            new Footer();
        }
    }
}

/*
* 命名空间相互引用
* 命名空间也可以有子命名空间
* */


/*
* 4-11描述文件中的全局类型还没有学习
* */

