
function PriorityQueue(){
    let items = []
    function QueueElement(element,priority){
        this.element = element
        this.priority = priority
    }

    this.enqueue = (newElement,priority) => {
        let addedElement = new QueueElement(newElement,priority)
        console.log(addedElement)
        let added = false
        
        for (i in items){
            if(items[i].priority < priority){
                items.splice(i,0,addedElement)
                added = true
                break
            }
        }
        if(!added){
            items.push(addedElement)
        }
    }
    this.print = () => {
        return(items.toString())
    }

}

let priorityQueue = new PriorityQueue()

priorityQueue.enqueue("a",2)
priorityQueue.enqueue("b",1)
priorityQueue.enqueue("c",1)

priorityQueue.print()

