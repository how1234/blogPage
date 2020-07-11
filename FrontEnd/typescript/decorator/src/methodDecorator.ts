//普通方法，target对应的是类的prototype
//静态方法target 对应的是类的构造函数
function getNameDecorator(target:any,key:string,descriptor: PropertyDescriptor){
  descriptor.writable = false
  console.log(target.constructor) //Test
  console.log(target,key)
}

class Test{
  name:string;
  constructor(name:string){
    this.name = name
  }

  @getNameDecorator
  getName(){
    return '123'
  }
} 