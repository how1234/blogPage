/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

 //第一个方法，使用hash表，空间复杂度为O(N)，时间复杂度为O(N+M)
var getIntersectionNode = function(headA, headB) {
    let map = new Map()
    
    if(!headA || !headB){
        return null
    }

    let cur = headA

    while(cur){
        map.set(cur,1)
        cur = cur.next
    }
    

    cur = headB
    
    while(cur){
        if(map.has(cur)){
            return cur
        }
        cur = cur.next
    }

    return null
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */


//第二个方法，使用双指针法
//设A和B链表截取掉公共部分的长度为L1和L2，公共部分长度为C
//当指针A走了L1+C步之后，再走L2步
//当指针B走了L2+C步之后，再走L1步
//如果有公共部分，他们是一定会在L1+L2+C时相遇的、
//时间复杂度O(M+N)
//空间复杂度O(1)
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB){
        return null
    }

    let pointerA = headA
    let pointerB = headB

    while(pointerA !== pointerB){
        if(pointerA){
            pointerA = pointerA.next
        }else{
            pointerA = headB
        }


        if(pointerB){
            pointerB = pointerB.next
        }else{
            pointerB = headA
        }
    }
    return pointerA

    
};