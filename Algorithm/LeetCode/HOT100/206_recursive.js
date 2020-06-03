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
 */
var reverseList = function(head) {
    
    if(!head || !head.next) return head
    
    
    //直接返回最后一个点
    let p = reverseList(head.next)

    head.next.next = head
    
    head.next = null

    
    return p
};