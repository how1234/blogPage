/**
 * @param {number[]} nums
 */
//前缀和数组,sum(i,j) = dp[j] - dp[i]
var NumArray = function(nums) {
    this.nums = nums
    this.dp = []
    let sum = 0;

    for(let i = 0;i<nums.length;i++){
        sum+=nums[i]
        this.dp.push(sum)
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i === 0){
        return this.dp[j]
    }else{
        return this.dp[j] - this.dp[i-1]
    }
    
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */