class Stack {
   
    constructor(){
        this.item = []
    }

    push(element){
        this.item.push(element)
    }
    pop(){
        return this.item.pop()
    }
    peek(){
        return this.item[this.item.length-1]
    }
    isEmpty(){
        return this.item.length === 0
    }
    clear(){
        this.item = []
    }
    size(){
        return this.item.length
    }
}



let stack = new Stack()
stack.push(1)

console.log(stack.item)

console.log(stack.pop())

stack.push(2)
console.log(stack.peek())

console.log(stack.isEmpty())

stack.clear()

console.log(stack.size())
console.log(stack.isEmpty())