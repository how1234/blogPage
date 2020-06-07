/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pA = headA
    let pB = headB

    if(!pA || !pB) return null
    //pA和pB同时等于null也会退出
    while(pA !== pB){
        pA = pA == null ? headB : pA.next   
        pB = pB == null ? headA : pB.next
    }
    return pA
};