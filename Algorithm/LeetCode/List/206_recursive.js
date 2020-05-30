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
    //我子节点下的所有节点都已经反转好了，现在就剩我和我的子节点 没有完成最后的反转了，所以反转一下我和我的子节点。
    if(!head || !head.next) return head //到底了
    let p = reverseList(head.next) //返回的是链表的最后一个点。

    head.next.next = head //当前点的下一个节点的下一个节点指回当前点（比如4->5变成5->4)

    //上面代码执行完之后 ，点4和点5的指向是(4->5->4)
    //下面那段代码执行完之后，指向变成了(5->4)
    head.next = null 
    
    return p
};