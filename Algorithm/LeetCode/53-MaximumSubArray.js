/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = 0
    let currentSum = 0;
    for (let i=0;i<nums.length;i++){
        
        currentSum = Math.max(nums[i],currentSum+nums[i])

        maxSum = Math.max(currentSum,maxSum)

       
    }
    
    return maxSum
    
};