/**
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
 * 时间复杂度O(max(l1,l2))
 * 空间复杂度O(max(l1,l2))
 */
var addTwoNumbers = function(l1, l2) {
    //节点在于模拟相加，数字相加的情况要考虑大数相加的情况。

    let dummyNode = new ListNode(0)
    
    let p1 = l1
    let p2 = l2
    let curr = dummyNode 
    let carry = 0;//初始化进位为0
    while(p1 != null || p2 != null){
        let p1Val = (p1) ? p1.val : 0
        let p2Val = (p2) ? p2.val : 0
        let sum = p1Val + p2Val + carry 
        //记录进位
        carry = Math.floor(sum / 10) 

        curr.next = new ListNode(sum % 10) //记录个位数

        curr = curr.next

        if(p1) p1 = p1.next
        if(p2) p2 = p2.next
    }

    if(carry){
        curr.next = new ListNode(1)
    }
    return dummyNode.next

    
};