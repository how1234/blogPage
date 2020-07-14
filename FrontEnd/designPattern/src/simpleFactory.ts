//简单工厂模式 描述了一个类， 它拥有一个包含大量条件语句的构建方法 可根据方法的参数来选择对何种产品进行初始化并将其返回。
class User{

}

class Admin{

}

class SimpleUserFacotry{

  public static create(type:string) : User | Admin{
    switch(type){
      case 'user': return new User();
      case 'admin': return new Admin();
      default:
        throw new Error('错误的用户类型')
    }
  }
}

let admin = SimpleUserFacotry.create('admin')

console.log(admin instanceof Admin) // true