//抽象工厂模式是一种创建型设计模式， 它能创建一系列相关的对象， 而无需指定其具体类。

//抽象工厂模式接口
interface AbstractFactory {

  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

//具体类实现抽象工厂的抽象方法。
class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
      return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
      return new ConcreteProductB1();
  }
}


class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
      return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
      return new ConcreteProductB2();
  }
}


interface AbstractProductA {
  usefulFunctionA(): string;
}


class ConcreteProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
      return '产品A1的结果';
  }
}

class ConcreteProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
      return '产品A2的结果';
  }
}

//抽象类接口
interface AbstractProductB {

  usefulFunctionB(): string;
  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

//具体类实现抽象类方法

class ConcreteProductB1 implements AbstractProductB {

  public usefulFunctionB(): string {
      return 'B1具体方法';
  }

 
  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
      const result = collaborator.usefulFunctionA();
      return `B1具体方法执行结果 (${result})`;
  }
}

class ConcreteProductB2 implements AbstractProductB {

  public usefulFunctionB(): string {
      return 'B2具体方法';
  }


  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
      const result = collaborator.usefulFunctionA();
      return `B2具体方法执行结果(${result})`;
  }
}

function clientCode1(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

console.log('抽象工厂一');
clientCode1(new ConcreteFactory1());

console.log('');

console.log('抽象工厂二');
clientCode1(new ConcreteFactory2());