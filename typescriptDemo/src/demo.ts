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
        (animal as Bird).sing();
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

// 使用instanceof语法来做类型保护
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
* 泛型 generic 泛指的类型
* */