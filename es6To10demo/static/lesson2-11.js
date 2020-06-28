/*
* proxy简单用法场景
* 房东 o
* 中介 d
* 租房客 d.price,d.name
* */
// let o = {
//     name: 'xiaomign',
//     price: 190
// }
// let d = new Proxy(o, {
//     get(target, p, receiver) {
//         console.log(target, p, receiver);
//         if (p === 'price') {
//             return target[p] + 20;
//         } else {
//             return target[p];
//         }
//     }
// });
// console.log(d.price);
// console.log(d.name)

/*
* 场景：对服务端的数据进行排序后，又需要知道排序前的数据
* 目的：让数据只读，* */
/*let o = {
    name: 'xiaomign',
    price: 190
}
let d = new Proxy(o, {
    get(target, p, receiver) {
        return target[p];
    },

    set(target, p, value, receiver) {
        console.log('set')
        return false;
    }
});
d.price = 340;
console.log(d.price);
console.log(d.name)

/!*
* es5 只读属性
* *!/
for (let [key] of Object.entries(o)) {
    Object.defineProperty(o, key, {
        writable: false
    })
}

o.name = '小白';
console.log(o.name, o.price)*/


/*
* 数据校验
* 场景：租房过程
* 监控场景：错误上报机制
* */

//1.初始状态

/*window.addEventListener('error',(e)=>{
    console.log(e.message)
},true)

let o = {
    name: 'xiaomign',
    price: 190
};

let validator=(target,key,value)=>{
    if (Reflect.has(target, key)) {
        if (key === 'price') {
            if (value > 300) {
                throw new TypeError('price is over 300')
                // return false;
            } else {
                target[key] = value;
            }
        } else {
            target[key] = value;
        }
    } else {
        return false;
    }
}
let d = new Proxy(o, {
    get(target, key) {
        return target[key] || '查无此项'
    },
    // set(target, key, value, receiver) {
    //     if (Reflect.has(target, key)) {
    //         if (key === 'price') {
    //             if (value > 300) {
    //                 return false;
    //             } else {
    //                 target[key] = value;
    //             }
    //         } else {
    //             target[key] = value;
    //         }
    //     } else {
    //         return false;
    //     }
    // }
    set: validator
});
d.name='小白';
d.price = 670
console.log(d.name,d.price)*/

/*
* 组件初始化的时候赋值一个可读且随机的id
* 1.随机数生成，但是会被改变
* 2.get id 的方式，读取时，每次生成的随机数都不一样
* 3.代理模式 穿件组件时生成，值不能被改变
* */
class Component {
    /*1*/
    // constructor() {
    //     this.id = Math.random().toString(36).slice(-8);
    // }

    /*2*/
    /*get id(){
        return Math.random().toString(36).slice(-8);
    }*/

    /*3*/
    constructor() {
        this.proxy = new Proxy({
            id: Math.random().toString(36).slice(-8)
        }, {})
    }

    get id(){
        return this.proxy.id;
    }
}

let com1 = new Component();
let com2 = new Component();

for (let i = 0; i < 10; i++) {
    console.log(com1.id, com2.id)
}

com1.id = 121;

console.log(com1.id, com2.id)


/*
* 撤销代理-》阅后即焚
* 用proxy.revocable 创建代理对象
* 撤销使用p.revoke()
* */

/*let o = {
    name: 'xiaomign',
    price: 190
};
let d = Proxy.revocable(o,{
    get(target, p, receiver) {
        console.log(target, p, receiver);
        if (p === 'price') {
            return target[p] + 20;
        } else {
            return target[p];
        }
    }
});

console.log(d.proxy.price)

setTimeout(function () {
    d.revoke();//撤销代理
    setTimeout(function () {
        console.log(d.proxy.price,d)
    },100)
},1000);*/


/*
* 对数组对象进行排序，排序后再拿到原始数据
* */
let res = [{name:'wcy',age:12},{name:'tyy',age:23},{name:'hh',age:12}];

let dRes = new Proxy(res,{
    get(target,key){
        console.log(target,key)
    }
})

console.log(dRes)