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
 * 空间复杂度O(LogN) 递归调用LogN 空间栈
 */
var sortList = function(head) {
    //divide and sort
    

    function mergeSort(head){
        //边界状况
        if(!head || !head.next) return head

        //找到中点
        let medianNode = findMedian(head)
        let rightNode = medianNode.next

        //切断链表
        medianNode.next = null



        return sortTwoList(mergeSort(head),mergeSort(rightNode))


    }

    function findMedian(head){
        if(!head || !head.next) return head

        let slow = head;
        let fast = head.next.next;

        while(fast && fast.next){ //当快结点走完时，慢节点走到的位置刚好为中点
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }

    function sortTwoList(l1,l2){
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