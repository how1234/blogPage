


function currying(fn,len){
    len = len || fn.length;
    
    return function (...args){
        return args.length >= len ? fn.apply(null,args): currying(fn.bind(this,...args),len-args.length)

    }

}

function Add(a,b,c){
    return a+b+c
}

var add = currying(Add)


console.log(add(1)(2, 3)); // 6
console.log(add(1, 2)(3)); // 6
console.log(add(1, 2, 3)); // 6