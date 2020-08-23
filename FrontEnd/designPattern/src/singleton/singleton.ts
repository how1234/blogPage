
//单例模式就是每个类只有一个实例

class Singleton{
    private static instance: Singleton;
    private info:string;

    private constructor(info:string){
      this.info = info;
    }
    public static getInstance(){
      if(!Singleton.instance){
        Singleton.instance = new Singleton('init')
      }
      return Singleton.instance
    }
    
    public getInfo(){
      if(!Singleton.instance){
        Singleton.instance = new Singleton('init')
      }
      return Singleton.instance.info
    }
} 

let obj = Singleton.getInstance()
let obj1 = Singleton.getInstance()
console.log(obj === obj1) //true
console.log(obj.getInfo())