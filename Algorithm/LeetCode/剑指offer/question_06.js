//stack
var reversePrint = function(head) {
    let stack = []
    if(!head) return stack
    
    let current = head
    while(current){
        stack.push(current.val)
        current = current.next
    }
    return stack.reverse()
};

//recursive
var reversePrint_recursive = function(head) {
    let stack = []
    if(!head) return stack
    helper(head)
    function helper(cur){
        if(cur){
            helper(cur.next)
            stack.push(cur.val)
        }
    }
    return stack
};