/*
* rest,spread 拷贝数据，而不是引用
* */

const input = {
    a: 1,
    b: 2
}

const test = {
    d: 4
}

const output = {
    ...input,
    ...test,
    c: 5
}
input.c = 6;
console.log(output, input)

const input1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
}

const {a, b, ...rest} = input1;
console.log(a, b, rest)