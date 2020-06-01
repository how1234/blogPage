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
 * 时间复杂度O(nLogN)，二分为logN，合并为N
 * 空间复杂度O(1) 循环
 */
var sortList = function(head) {
    //bottom-to-up
    
    let dummyNode = new ListNode(-1)

    dummyNode.next = head
    
    //先算出链表长度
    let p = head
    let listLen = 0
    while(p){
        listLen++;
        p = p.next
    }
    

    for(let subListLen = 1;subListLen<listLen;subListLen*=2){
        let cur = dummyNode.next //链表头部
        let tail = dummyNode

        while(cur){
            let left = cur //链表的前半部分
            let right = cut(left,subListLen) //链表的右半部分

            cur = cut(right,subListLen) //剩余部分

            tail.next = mergeTwoList(left,right)
            while(tail.next){
                tail = tail.next
            }
        }

    }
    return dummyNode.next
    
    //切掉l1头部的n个节点
    function cut(l1,n){
        let p = l1
        //切0个节点没意义
        while(n > 1 && p){
            p = p.next
            n--
        }

        if(!p) return p //如果链表不够切了，直接返回空指针

        let next = p.next 
        p.next = null

        //返回切完的下一个节点，也就是l1的后半部分
        return next
        
    }

    function mergeTwoList(l1,l2){
        if(!l2) return l1
        if(!l1) return l2

        let dumbNode = new ListNode(-1)
        let cur = dumbNode

        while(l1 && l2){
            if(l1.val < l2.val){
                cur.next = l1
                cur = cur.next
                l1 = l1.next
            }else{
                cur.next = l2
                cur = cur.next
                l2 = l2.next
            }
        }

        if(l1){
            cur.next = l1
        }else{
            cur.next = l2
        }

        return dumbNode.next
    }

    return mergeSort(head)
};