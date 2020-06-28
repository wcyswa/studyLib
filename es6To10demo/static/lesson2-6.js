/*
* 正则
* */

/*
*   y（sticky）修饰符：处理连续匹配的场景
* */

/*
* unicode  u修饰符 处理大于\uffff字节的
* es6中，只要有中文就统统加u;并且习惯性加u修饰符
* */


/*
* 1.模板字符串初级
* 2.模板字符串方法使用
* */
let s = `第一行
第二行
`;
console.log(s)

function price(params, type, arg) {
    let s1 = params[0];
    const retailP = 20;
    const wholeP = 13;
    let showText
    if (type === 'retail') {
        showText = `购买单价是：${retailP}`
    } else {
        showText = `购买的批发价是:${wholeP}`;
    }
    return `${s1}${showText}`
}

let showText = price`您此次的${'retail'}`;
console.log(showText, '输出文本')
