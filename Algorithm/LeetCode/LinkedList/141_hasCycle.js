/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let aSet = new Set()

    let cur = head
    while(cur){
        if(aSet.has(cur)){
            return true
        }
        aSet.add(cur)
        cur = cur.next
    }
    return false
};

var hasCycle1 = function(head) {
    if(!head || !head.next){
        return false
    }
    let slow = head, fast = head.next

    while(slow && fast && fast.next){
        if(slow === fast){
            return true
        }
        slow = slow.next
        fast = fast.next.next   
    }
    return false
    
};