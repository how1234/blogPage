class Person{
    constructor(name){
        this._name = name
    }
    get name() {
        return this._name
    }

    set name(value){
        this._name = value
    }
}

let person = new Person('Person')
console.log(person._name)
console.log(person.name)

person._name = "private Name"

console.log(person.name) //private Name

person.name = "public Name" 

console.log(person.name)//public Name

//Which means it didn't do the encapsulation as other OO languages