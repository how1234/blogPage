/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var sum = 0;
    
    var tail = new ListNode(0)
    
    var dummy = tail

    
    while(l1 || l2 || sum){
        
        
        var sum = (l1? l1.val: 0) + (l2? l2.val: 0) + sum
        
        tail.next = new ListNode(sum % 10)
        
        tail = tail.next
        
        
        l1 ? l1 = l1.next : null
        l2 ? l2 = l2.next : null
        
        sum = Math.floor(sum/10)
        
    }
    
    return dummy.next
    
    
};