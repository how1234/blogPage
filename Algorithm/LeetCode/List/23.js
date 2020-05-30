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
 * 时间复杂度O(NlogN)，遍历k个链表里面的n个元素，加排序NLogN。
 * 空间复杂度O(N) 链表存放N个元素。
 */
var mergeKLists = function(lists) {
    //暴力解法
    let arr = []
    for (let node of lists){
        while(node){
            arr.push(node.val)
            node = node.next
        }
    }

    arr.sort( (v1,v2)=>{
        return v1 - v2
    })


    let dummyNode = new ListNode(0)
    if(arr[0] != null){
        dummyNode.next = new ListNode(arr[0])
    }else{
        return null;
    }


    let cur = dummyNode.next

    for(let i = 1;i<arr.length;i++){
        cur.next = new ListNode(arr[i])
        cur = cur.next
    }
    return dummyNode.next;
    
};