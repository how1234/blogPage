/** 
 * 合并两个排序的链表
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
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(0)

    let cur = dummy

    let firstP = l1
    let secondP = l2

    while(firstP && secondP){
        if(firstP.val < secondP.val){
            cur.next = firstP
            firstP = firstP.next
        }else{
            cur.next = secondP
            secondP = secondP.next
        }  
        cur = cur.next   
    }

    while(firstP){
        cur.next = firstP
        firstP = firstP.next

        cur = cur.next
    }

    while(secondP){
        cur.next = secondP
        secondP = secondP.next

        cur = cur.next
    }
    return dummy.next
};