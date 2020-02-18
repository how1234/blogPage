function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  
  var tail = new ListNode(0)
  
  var dummy = tail
  
  tail.next = new ListNode(10)
  tail = tail.next
  
  
  console.log(tail.next);
  console.log(dummy.next);
  
  
  
  tail.next = new ListNode(20)
  tail = tail.next
  
  console.log(tail.next);
  console.log(dummy.next);
  
  