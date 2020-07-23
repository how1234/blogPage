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
    //双指针遍历

    //原链表的前指针，反转后链表首部，在例子里最后指向5这个节点
    let p1 = null
    //原链表的后指针，在例子里，最后指向null这个节点
    let p2 = head

    //反转
    while(p2){
        //记录下原来后指针的下一个节点
        let temp = p2.next

        //后指针指向前指针，调换位置
        p2.next = p1

        //双指针都往后移
        p1 = p2
        p2 = temp
      
    }
    return p1
    
};