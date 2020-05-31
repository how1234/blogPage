/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * 时间复杂度O(kn * logk)，k个列表，每个列表nlogN
 * 空间复杂度O(logN) 调用logN次空间
 */
var mergeKLists = function(lists) {
    if(!lists.length) return null
    let len = lists.length
    return mergeSort(lists,0,len-1)


    function mergeSort(lists,left,right){
        if(left >= right){
            return lists[left]
        }

        let mid = (left+right) >> 1
        
        let l1 = mergeSort(lists,left,mid)
        let l2 = mergeSort(lists,mid+1,right)

        return merge(l1,l2)

    } 

    function merge(l1,l2){
        if(!l1) return l2
        if(!l2) return l1

        let dummyNode = new ListNode(0)
        let cur = dummyNode

        while(l1 && l2){
            if(l1.val < l2.val){
                cur.next = l1
                l1 = l1.next
            }else{
                cur.next = l2
                l2 = l2.next
            }
            cur = cur.next
        }
        while(l1){
            cur.next = l1
            cur = cur.next
            l1 = l1.next
        }

        while(l2){
            cur.next = l2
            cur = cur.next
            l2 = l2.next
        }
        
        return dummyNode.next

    }
    
};