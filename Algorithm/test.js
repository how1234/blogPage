function func1(number){
  let stack = []
  let res = []
  while(number > 0){
    let reminder = number % 2
    stack.push(reminder)
    number = number >> 1
  }
 
  return stack.reverse().join('')

}

console.log(func1(100))