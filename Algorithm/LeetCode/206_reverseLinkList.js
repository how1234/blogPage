var reverseList = function(head) {
    let prev = null;
    var cur = head
    
    while(cur){
        let temp = cur.next
        
        cur.next = prev

        prev = cur

        cur = temp
    }
    return prev
    
};