/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    if(!head) return 

    let prevP = head;
    let laterP = head;
    
    for(let i = 0;i<k;i++){
        laterP = laterP.next
    }

    while(laterP){
        prevP = prevP.next
        laterP = laterP.next
    }
    
    return prevP
    
};