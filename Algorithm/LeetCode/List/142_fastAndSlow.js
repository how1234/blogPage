/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var detectCycle = function(head) {
    let slow = head
    let fast = head

    while(true){
        if(!fast || !fast.next){
            return null
        }
        slow = slow.next
        fast = fast.next.next

        if(fast === slow){
            break;
        }
    }
    fast = head

    while(fast !== slow){
        fast = fast.next
        slow = slow.next
    }

    return fast
};