//单例模式


class Demo{
  private static instance:Demo
  private constructor(){

  }

  static getInstance(){
    if(!this.instance){
      this.instance = new Demo()
    }
    return this.instance

  }

}

const demo1 = Demo.getInstance()
const demo2 = Demo.getInstance()

console.log(demo1 === demo2)

