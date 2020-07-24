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
 */
//空间复杂度O(N)
//时间复杂度O(N)
var deleteDuplicates = function(head) {
  //1.因为链表是排序的，如果发现这个节点的值和下个节点的值相同，就删除下个节点的值
  //2.返回头部


  let cur = head

  while(cur && cur.next){
      if(cur.val === cur.next.val){
          cur.next = cur.next.next
      }else{
        
          //针对[1,1,1]这样的输出
          cur = cur.next
      }
    
  }
  return head
};