class Creator{
  create(name){
    return new Product(name)
  }
}

class Product{
  constructor(name){
    this.name = name
  }
  func1(){
    console.log('fn1')
  }
}


let creator = new Creator();
let p = creator.create('p')

p.func1()