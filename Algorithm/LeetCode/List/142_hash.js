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
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var detectCycle = function(head) {
    let hash = new Map()

    let pos = 0;
    let cur = head;

    while(cur){
        if(hash.has(cur)){
            return cur
        }else{
            hash.set(cur,pos)
            pos+=1
            cur=cur.next
        }
    }
    return null
};