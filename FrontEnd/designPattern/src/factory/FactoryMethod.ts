//工厂方法，其在父类中提供一个创建对象的方法， 允许子类决定实例化对象的类型。



abstract class Creator {

  public abstract factoryMethod(): Product;

  public someOperation(): string {
      // Call the factory method to create a Product object.
      const product = this.factoryMethod();
      // Now, use the product.
      return `具体操作 ： ${product.operation()}`;
  }
}


class ConcreteCreator1 extends Creator {

  public factoryMethod(): Product {
      return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
      return new ConcreteProduct2();
  }
}


interface Product {
  operation(): string;
}

/**
* Concrete Products provide various implementations of the Product interface.
*/
class ConcreteProduct1 implements Product {
  public operation(): string {
      return '产品1的操作';
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
      return '产品2的操作';
  }
}

function clientCode(creator: Creator) {
  console.log(creator.someOperation());
 
}


console.log('产品1的操作结果');
clientCode(new ConcreteCreator1());
console.log('');

console.log('产品2的操作结果');
clientCode(new ConcreteCreator2());