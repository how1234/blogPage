/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    let pre = new ListNode(-1)
    pre.next = head
    
    let cur = pre
    
    while(cur.next){
        if(cur.next.val === val){
            cur.next = cur.next.next
            break
        }
        cur = cur.next
    }
    return pre.next
};