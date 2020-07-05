interface Bird{
  fly:boolean;
  sing:() => {

  }
}


interface Dog{
  fly:boolean;
  bark: () =>{

  }
}


//1.类型断言
function trainAnimal(animal:Bird|Dog){
  if(animal.fly){
    (animal as Bird).sing()
  }

  (animal as Dog).bark()
}

//2.in 语法来做类型保护
function trainAnimalSecond(animal:Bird|Dog){
  if('sing' in animal){
    animal.sing()
  }else{
    animal.bark()
  }
}


//3. typeof语法

function add(first : string | number, second: string | number){
  if(typeof first === 'string' || typeof second === 'string'){
    return `${first}${second}`
  }
  return first+second
}

class NumberObj{
  count:number
}
//4.  instanceof
function addSecond(first : NumberObj | object, second: object| NumberObj){

  if( first instanceof NumberObj && second instanceof NumberObj){
    return first.count + second.count
  }
  return 0
}

