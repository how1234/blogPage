/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
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

      if(this.heap[index] < this.heap[parentIndex]){
          [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]]
          this.shiftUp(parentIndex)
      }

  }
  shiftDown(index){
      let leftChildren = index * 2 + 1
      let rightChildren = index * 2 + 2

      if(this.heap[index] > this.heap[leftChildren]){
          [this.heap[index],this.heap[leftChildren]] = [this.heap[leftChildren],this.heap[index]]
          this.shiftDown(leftChildren)
      }
      if(this.heap[index] > this.heap[rightChildren]){
          [this.heap[index],this.heap[rightChildren]] = [this.heap[rightChildren],this.heap[index]]
          this.shiftDown(rightChildren)
      }
      
  }
  pop(){
      this.heap[0] = this.heap.pop()
      this.shiftDown(0)
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
var findKthLargest = function(nums, k) {
  let heap = new MinHeap()

  nums.forEach( (el) => {
      heap.insert(el)
      
      if(heap.size() > k){
    
          heap.pop()
      }
  })
  return heap.peek()
};