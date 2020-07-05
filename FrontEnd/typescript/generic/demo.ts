//范型 generic 泛指的类型

function join<T>(first : T,second : T){
  return `${first}${second}`
}


function map<T>(params:T[]){
  return params
}


function joinSecond<T,P>(first : T,second : P){
  return `${first}${second}`
}


console.log(joinSecond<number,string>(1,'2'))

//针对一些不确定的类型，我们使用范型
console.log(join<number>(1,1))

console.log(map<string>(['1']))