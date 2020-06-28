/*
* For await of
* es9中异步操作集合遍历
* */

function gen(time) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(time)
        }, time)
    })
}

/*async function test() {
    let arr = [gen(2000),gen(10),gen(230)];
    for (let item of arr){
        console.log(Date.now(),await item.then(console.log))
    }
}*/

async function test() {
    let arr = [gen(2000), gen(10), gen(230)];
    for await (let item of arr) {
        console.log(Date.now(), item)
    }
}

// test()

/*
* 自定义数据结构
*
* */
/*
* 自定义遍历结构
* */
const obj = {
    count: 0,
    Gen(time) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve({//done跟value的数据结构固定
                    done: false,
                    value: time
                })
            }, time)
        })
    },
    [Symbol.asyncIterator]() {//对象中的动态key必须用[]扩起来；Symbol.asyncIterator 是配合for-await-of 的固定写法
        let self = this;
        return {
            next() {
                self.count++;
                if (self.count < 4) {
                    return self.Gen(Math.random())
                } else {
                    return Promise.resolve({
                        done: true,
                        value: ''
                    })
                }
            }
        }
    }
};

async function test1() {
    for await (let item of obj) {
        console.log(Date.now(),item)
    }
}

// test1()

/*
* es9 promise增强  用finally来兜底
* */

const gen1=(time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            if(time<500){
                reject(time)
            }else{
                resolve(time)
            }
        })
    })
};

gen1(Math.random()*1000).then((val)=>console.log(val,'resolve')).catch(err=>console.log(err,'reject')).finally(()=>console.log('finish'))