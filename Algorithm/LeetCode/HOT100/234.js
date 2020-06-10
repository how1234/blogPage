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
var isPalindrome = function(head) {
    //快慢指针找链表中点，然后反转一半链表，进行比较。

    let fast = head
    let slow = head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    
    let pre = null;
    //将slow后面的链表反转
    while(slow){
        let temp = slow.next
        slow.next = pre
        pre = slow
        slow = temp
    }
    //之后的链表和之前的链表进行对比
    while(pre){   
        if(!head || !pre) return false
        if(head.val !== pre.val){
            return false
        }

        head = head.next
        pre = pre.next
    }
    return true
};