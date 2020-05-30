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
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var hasCycle = function(head) {
    if(!head || !head.next){
        return false
    }

    let slow = head.next
    let fast = head.next.next

    while(slow !== fast){
        if(!fast || !fast.next){
            return false
        }
        slow = slow.next
        fast = fast.next.next
    }

    return true
};