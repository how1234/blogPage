var obj1 = {
    name:'original name',
    getFunction:function(){
        return this.name
    }
}

var obj2 = {
    name:'new name'
}
var obj3 = {
    name:'Another name'
}


console.log(obj1.getFunction()) //original name
console.log(obj1.getFunction.apply(obj2)) //new name
console.log(obj1.getFunction.call(obj3)) //Another name