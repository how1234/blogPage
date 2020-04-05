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
var swapPairs = function(head) {
    let dump = new ListNode(0);
    dump.next = head;
    let cur = dump
    
    while(cur.next !=null && cur.next.next !=null){
       let firstNode = cur.next
       let secondNode = cur.next.next

       cur.next = secondNode
       firstNode.next = secondNode.next
       secondNode.next = firstNode
       cur = firstNode

    }
    return dump.next;
};