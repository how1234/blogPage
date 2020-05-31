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
    let dumpNode = new ListNode(0)

    let cur = dumpNode

    while(l1 && l2){
        if(l1.val < l2.val){
            cur.next = l1
            l1 = l1.next
        }else{
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }

    while(l1){
        cur.next = l1
        cur = cur.next
        l1 = l1.next
    }

     while(l2){
        cur.next = l2
        cur = cur.next
        l2 = l2.next
    }
    return dumpNode.next
    
};