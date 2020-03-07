class Queue {
 
    constructor(){
        this.items=[]
    }
    enqueue(){
        this.items.push(...arguments)
    }
    dequeue(){
        return this.items.shift()
    }
    front(){
        return this.items[0]
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
}

let queue = new Queue()

queue.enqueue(2,3)

console.log(queue)

queue.dequeue()

console.log(queue)

console.log(queue.front())

console.log(queue.isEmpty())

console.log(queue.size())
