//implement a iterator

var myObject = {
    a:2,
    b:3
}

Object.defineProperty(myObject,Symbol.iterator,{
    enumerable:false,
    writable:false,
    configurable:true,
    value: function(){
        var obj = this;
        var index = 0;
        var keys = Object.keys(obj)

        return {
            next: function(){
                return {
                    value: obj[keys[index++]],
                    done: (index> keys.length)
                }
            }
        }
    }
})


var it = myObject[Symbol.iterator]()

console.log(it.next());

console.log(it.next());

console.log(it.next());