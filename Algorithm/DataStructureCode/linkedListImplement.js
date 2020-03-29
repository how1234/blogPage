function LinkedList() {
  function Node(element) {
    this.element = element;
    this.next = null;
  }

  let length = 0;
  let head = null;

  this.append = function(element) {
    let node = new Node(element);

    let current;

    if (head === null) {
      head = node;
    } else {
      current = head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };

  this.insert = function(position, element) {
    if (position >= 0 && position <= length) {
      //boundary check
      let node = new Node(element);
      let i = 0;
      let current = head;
      let previous;

      //if it is a empty linkedlist
      if (current === null) {
        head = node;
      } else if (position === 0) {
        //insert to the head
        node.next = current;
        head = node;
      } else {
          
          
        while (i < position) {
          previous = current;
          current = current.next;
          i++;
        }
        node.next = current;
        previous.next = node;
        length++;
      }
      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function(position) {
    if (position >= 0 && position < length) {
      let current = head;
      let previous;
      let i = 0
      if (position === 0) {
        head = head.next;
      } else {
          while (i < position){
              previous = current
              current = current.next
              i++
          }
          previous.next = current.next

      }
      length-=1
      return current.element
    }else{
        return null
    }
  };
  this.indexOf = function(element) {
    let i = 0,current = head
    
    while(i < length){
        if(current.element === element){
            return i
        }else{
            current = current.next
            i++
        }
    
    }
    return -1
    
  };
  this.remove = function(element) {
    let index = this.indexOf(element)
    return this.removeAt(index)

  };



  this.isEmpty = function() {
      return length === 0
  };

  this.size = function() {
      return length
  };

  this.toString = function() {
      let current = head;
      let string = ""
      while(current){
          string += current.element + (current.next ? '\n':"")
          current = current.next
      }
      return string
  };

  this.print = function() {};
}

var linkedList = new LinkedList()

linkedList.append(1)
linkedList.append(2)
linkedList.append(3)


console.log(linkedList.toString()) //1,2,3
console.log('====================================');
linkedList.remove(2) 
console.log('====================================');
console.log(linkedList.toString())//1,3
console.log('====================================');
linkedList.removeAt(1)  //3
console.log('====================================');
console.log(linkedList.toString()) //1
console.log('====================================');
linkedList.append(4)
linkedList.append(5)
linkedList.append(6)
console.log('====================================');
console.log(linkedList.toString()) //1,4,5,6
console.log('====================================');
console.log(linkedList.insert(1,8))
console.log('====================================');
console.log(linkedList.toString()) //1,8,4,5,6