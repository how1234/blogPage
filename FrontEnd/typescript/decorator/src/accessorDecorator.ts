
//访问器，增加装饰器。

function accessoryDecorator(target : any,key:string,descriptor:PropertyDescriptor){
  console.log(target.constructor)
  console.log(key)
  console.log(descriptor)
  descriptor.writable = false
}
class TestClass {
  private _name :string;
  constructor(name : string){
    this._name = name
  } 
  @accessoryDecorator
  get name(){
    return this._name
  }
  
  set name(name:string){
    this._name = name
  }

  
}


let instance = new TestClass('test')

instance.name = '1'

console.log(instance.name)