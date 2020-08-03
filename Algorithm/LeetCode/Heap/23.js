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
 */
class MinHeap{
  constructor(){
      this.heap = []
  }

  insert(value){
      this.heap.push(value)
      this.shiftUp(this.heap.length - 1)        
  }
  shiftUp(index){
      if(index === 0) return 

      let parentIndex = (index - 1) >> 1

      if( this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val){
          [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]]
          this.shiftUp(parentIndex)
      }

  }
  shiftDown(index){
      
      let leftChildren = index * 2 + 1
      let rightChildren = index * 2 + 2
      

      if( this.heap[leftChildren] && this.heap[leftChildren].val < this.heap[index].val){
          [this.heap[leftChildren],this.heap[index]] = [this.heap[index],this.heap[leftChildren]]
          this.shiftDown(leftChildren)
      }
      if( this.heap[rightChildren] && this.heap[rightChildren].val < this.heap[index].val){
          [this.heap[rightChildren],this.heap[index]] = [this.heap[index],this.heap[rightChildren]]
          this.shiftDown(rightChildren)
      }
      
  }
  pop(){
      if(this.size() === 1) return this.heap.pop()
      let top = this.heap[0]
      this.heap[0] = this.heap.pop()
      this.shiftDown(0)
   
 
      return top
  }
  peek(){
      return this.heap[0]
  }
  size(){
      return this.heap.length
  }
  
}
//时间复杂度O(NLogK)
//空间复杂度O(K)
var mergeKLists = function(lists) {
    let dummyNode = new ListNode(0)

    let p = dummyNode

    let h = new MinHeap
    lists.forEach( l => {
        if(l) h.insert(l)
        
    })

    while(h.heap.length){
        let node = h.pop()
        p.next = node
        p = p.next
        if(node.next) h.insert(node.next)
    }
    
    return dummyNode.next
};