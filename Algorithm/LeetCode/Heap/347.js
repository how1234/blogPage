/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
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
//空间复杂度O(N+K)
var topKFrequent = function(nums, k) {
    let map = new Map()

    //复杂度O(N)
    nums.forEach( (num) => {
        map.set(num, map.has(num) ? map.get(num) + 1: 1)
    })
    //复杂度O(LogK)
    let h = new MinHeap()
    map.forEach( (val,key) => {
        h.insert( {val,key})
        if(h.size() > k){
            h.pop()
        }
    })

    return h.heap.map( (el) =>  el.key)

};