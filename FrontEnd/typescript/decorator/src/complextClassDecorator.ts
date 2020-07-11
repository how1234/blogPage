function classDecorator<T extends new (...args:any[]) => any>(constructor:T){
  return class extends constructor{
    name="lee"
    getName(){
      return this.name
    }
  }
}


function classDecorator1(){
  return function <T extends new (...args:any[]) => any>(constructor:T){
    return class extends constructor{
      name = "extraClass"
      getExtraName(){
        return this.name
      }
    }
  }
}

@classDecorator
class ClassTest{
  name="hi"
  getName(){
    return this.name
  }
}

let ClassTest1 = classDecorator1()(
  ClassTest
)


let obj = new ClassTest()
let obj1 = new ClassTest1()
console.log(obj1.getExtraName())
console.log(obj.getName())