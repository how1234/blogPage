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
 * 时间复杂度O(N2)
 * 空间复杂度O(N) 另开一个新链表
 */
var insertionSortList = function(head) { 
    if(!head || !head.next) return head 
    
    let dummyNode = new ListNode(0);
  
    dummyNode.next = head
    let prev = head
    let cur = head.next
  
  
    while (cur) {
      if(cur.val < prev.val){ //未排序状态
          let temp = dummyNode //从头开始比
          while(temp.next.val < cur.val){ //如果该点的下一个点比cur小的话，指针后移
              temp = temp.next
          }
  
          //该点的下一个点比cur大，跳出循环
  
          //前面指针指向当前指针的下一个节点
          prev.next = cur.next
          //当前指针的下一个节点指向已排序指针的下一个节点
          cur.next = temp.next
  
          //已排序指针的下一个节点等于当前未排序的指针
          temp.next = cur
  
          //当前指针跳回原来的未排序指针
          cur = prev.next
  
      }else{ //已排序状态
          prev = prev.next
          cur = cur.next
      }
    }
  
    return dummyNode.next;
  };