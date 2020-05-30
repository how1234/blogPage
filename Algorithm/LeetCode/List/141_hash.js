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
 * 空间复杂度O(N)
 */
var hasCycle = function(head) {
    let set = new Set()

    let cur = head;

    while(cur){
        if(set.has(cur)){
            return true
        }else{
            set.add(cur)
            cur = cur.next
        }
    }
    
    return false
};