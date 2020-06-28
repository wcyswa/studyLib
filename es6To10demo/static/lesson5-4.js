/*
*
* */
console.log(/foo.bar/s.test('foo\nbar'))

/*
* 判断是否启用了dotAll模式
* */
const re = /foo.bar/su;
console.log(re.dotAll)
console.log(re.flags)

/*const t = '2020-06-17'.match(/(\d{4})-(\d{2})-(\d{2})/)
console.log(t)*/

const t = '2020-06-17'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);//分组捕获
console.log(t)

/*
* 先行断言
* */
let test = 'hello world';
console.log(test.match(/hello(?=\sworld)/));//先行断言：先遇到条件，然后判断后面的时候满足匹配
console.log(test.match(/(?<!hello1\s)world/))//后行断言  =:等于  !:不等于

/*
* '$foo %foo foo'字符串中前面是$符号的foo替换成bar
* 请提取'$1 is worth about ￥123'字符中的美元数
* */

let s = '$foo %foo testfoo';
let s1 = s.match(/(?<=\$)(?<$foo>foo)/)
console.log(s1);
console.log(s)