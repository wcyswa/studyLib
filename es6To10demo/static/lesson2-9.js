// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.reject(new Error());
//
// Promise.all([p1,p2,p3]).then((value)=>{
//     console.log(value)
// })
//
// Promise.race([p1,p2,p3]).then((value)=>{
//     console.log(value)
// })


const p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(1);
        }, 1000)
    })
};

const p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(2)
        }, 300)
    })
};

Promise.race([p1(), p2()]).then((value => {
    console.log(value)
}));


// let promiseArr = [];
// arr.map((item)=>{
//     promiseArr.push(mml2svg([item]))
// });
// Promise.all(promiseArr).then((value)=>{
//     console.log(value,'发的发的')
// })
