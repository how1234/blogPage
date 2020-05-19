
function Person(a){
    this.a = a
}

function newImp(cons){
    let obj = new Object()
    obj.__proto__ = cons.prototype

    cons.apply(obj,[...arguments].slice(1))
    
    return obj
}

let a = 'b'
let obj1 = newImp(Person,a)

console.log(obj1.a)
console.log(obj1 instanceof Person)



let obj2 = Object.create(new Person())
console.log(obj2 instanceof Person)



