
//类的装饰器，对类进行一个修饰
//装饰器本身是一个函数
//类装饰器接收的参数是构造函数
//装饰器通过@符号来使用

function testDecorator(constructor:any){
  constructor.prototype.getName = () => {
    constructor.log('dell')
  }
}
//定义类的时候执行。
//多个装饰器的时候，从下到上执行
@testDecorator
class Test1{

}

const test = new Test1()

console.log(123)