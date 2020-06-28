/*
*
* */


let grade = {
    // 'lilei'
}


/*
* 补白
* */
// for (let i = 0;i<30030;i+=1000){
//     console.log(i.toString().padStart(6,'*#'));
//     console.log(i.toString().padEnd(6,'&'))
// }

/*
* 对象描述符
* */
const data = {
    PorLand: '45',
    Suancai: '43',
    Lisa: '34',
};

// for (let [k, v] of data) {
//     console.log(k, v)
// }

Object.defineProperty(data, 'Lisa', {
    enumerable: false,
    writable:false
});

console.log(Object.keys(data))//获取表面的数据信息
console.log(Object.getOwnPropertyDescriptor(data,'Lisa'))
console.log(Object.getOwnPropertyDescriptors(data))
