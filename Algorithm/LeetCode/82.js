var deleteDuplicates = function(head) {
    let dummy = {next: head};
    let fast = head, slow = dummy;
    while(fast){
        while(fast.next && fast.next.val == fast.val){
            fast = fast.next;
        }
        if(slow.next != fast){
            slow.next = fast.next;
        }else{
            slow = slow.next;
        }
        fast = fast.next;
    }
    return dummy.next;
};

