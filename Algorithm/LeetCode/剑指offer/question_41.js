/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.data = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.data.length === 0){
        this.data.push(num)
        return
    }

    let left = 0;
    let right = this.data.length -1
    
    
    while(left <= right){
        let mid = (left + right) >> 1
        
        if(this.data[mid] === num){ //插入数字刚好等于当前中位数
            this.data.splice(mid,0,num)
            return //跳出循环
        }else if(this.data[mid] > num){ //插入数字小于当前中位数
            right = mid - 1
        }else{ //插入数字大于当前中位数
            left = mid + 1
        }
    }
    //如果插入数小于所有数，此时right = -1，如果插入数字大于所有数字，此时right指向数组最后一位
    this.data.splice(right+1,0,num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const len = this.data.length
    if(!len){
        return null
    }
    let mid = (this.data.length-1) >> 1
    if(len % 2 === 1){
        return this.data[mid]
    }
    return (this.data[mid] + this.data[mid+1]) /2
    
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */