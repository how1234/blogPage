async function hello1(){
    return 'hello1'
}

function hello(){
    return 'hello'
}

console.log(typeof hello1()) //object
console.log(hello1() instanceof Promise) //true

console.log(typeof hello()) //string

hello1().then( (value)=> {console.log(value)}) //hello1