/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var missingNumber = function(nums){
    
    let len = nums.length
    let sum = 0

    if(!len){
        return 0
    }
     for(let i = 0;i<len;i++){
         sum += nums[i]
    }

    return len*(len+1) / 2 - sum

    
    
};