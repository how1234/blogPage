var CQueue = function() {
    this.stackOne = []
    this.stackTwo = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stackOne.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.stackTwo.length === 0){
        this.stackTwo = this.stackOne.reverse()
        this.stackOne = []
    }
      if(this.stackTwo.length === 0){
            return -1
        }else{
            return this.stackTwo.pop()
        }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */