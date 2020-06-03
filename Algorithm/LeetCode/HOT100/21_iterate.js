/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var mergeTwoLists = function(l1, l2) {
    
    if(!l1) return l2
    if(!l2) return l1
    
    let dummyHead = new ListNode(0)
    let cur = dummyHead

    while(l1 && l2){
        if(l1.val < l2.val){
            cur.next = l1
            cur = cur.next
            l1 = l1.next
        }else{
            cur.next = l2
            cur = cur.next
            l2 = l2.next
        }
    }
    if(l1){
        cur.next = l1
    }else{
        cur.next = l2
    }

    return dummyHead.next

    
};