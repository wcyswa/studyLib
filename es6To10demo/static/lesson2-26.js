let authors = {
    allAuthors:{
        fiction:['Agle','Blue','OP'],
        scienceFiction:['Cidy','Da'],
        fantasy:['JK3']
    }
};

/*
* 1.对象上挂载一个Symbol.iterator的key
* 2.方法返回一个对象，并且对象要有一个next方法，next方法必须返回一个对象，该对象中要有两个必须的字段：done,value
* */
/*authors[Symbol.iterator] = function () {
    let allAuthors = this.allAuthors;
    let keys = Reflect.ownKeys(allAuthors);
    let values =[];
    /!*必须的规范*!/
    return {
        next(){
            if(!values.length){
                if(keys.length){
                    values= allAuthors[keys[0]];
                    keys.shift();
                }
            }
            return{
                done:!values.length,
                value:values.shift()
            }
        }
    }
};*/

authors[Symbol.iterator] = function * (){
    let allAuthors = this.allAuthors;
    let keys = Reflect.ownKeys(allAuthors);
    let values = [];
    while (1){
        if(!values.length){
            if(keys.length){
                values = allAuthors[keys[0]];
                keys.shift();
                yield values.shift();
            }else{
                return false;
            }
        }else{
            yield values.shift();
        }
    }
}

let r =[];
console.log(authors,'fsfd')
for (let v of authors){
    console.log(v,'测hi')
    r.push(v)
}
console.log(r)