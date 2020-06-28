// reflect 反射
// 反射机制：java的反射机制是在编译阶段不知道哪个类被加载，而是在运行的时候才加载执行
console.log(Reflect.apply(Math.floor, null, [4.54]));

console.log(Reflect.construct(Date, []));
const student = {}
console.log(Reflect.defineProperty(student, 'name', {value: 'Make'}))

const obj={x:1,y:2};
console.log(Reflect.get(obj,'x'));
console.log(Reflect.get([3,4,5],1))
