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
 */
var hasCycle = function(head) {
    let aSet = new Set()

    let cur = head
    while(cur){
        if(aSet.has(cur)){
            return true
        }
        aSet.add(cur)
        cur = cur.next
    }
    return false
};


/**
 * @param {ListNode} head
 * @return {boolean}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var hasCycle = function(head) {
    let fast = head
    let slow = head
    //如果没有环的话，fast.next会为null，跳出循环
    while(fast && slow && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(fast === slow){
            return true
        }
    }
    
    return false
};