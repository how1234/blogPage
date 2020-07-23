/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 时间复杂度O(max(l1,l2))
 * 空间复杂度O(max(l1,l2))
 */
var addTwoNumbers = function(l1, l2) {
  //节点在于模拟相加，数字相加的情况要考虑大数相加的情况。

  let dummyNode = new ListNode(0)
  
  let p1 = l1
  let p2 = l2
  let cur = dummyNode 
  let carry = 0;//初始化进位为0
  
  while(p1 || p2){
      let v1 = p1 ? p1.val : 0;
      let v2 = p2 ? p2.val : 0;
      let sum = v1 + v2 + carry
      //进位
      carry = Math.floor(sum / 10)
      //个位数
      let digit = sum % 10;
      cur.next = new ListNode(digit)

      //向下遍历
      if(p1) p1 = p1.next
      if(p2) p2 = p2.next
      cur = cur.next
      
  }

  //如果进位存在，再添加一个新的位数
  if(carry){
      cur.next = new ListNode(1)
  }

  return dummyNode.next



  
};