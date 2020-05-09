/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0){
        return 
    }
    let dp = new Array(nums.length)
    let max = nums[0]
    
    dp[0] = nums[0]

    for (let i = 1;i<dp.length;i++){
        
        dp[i] = Math.max(dp[i-1] + nums[i],nums[i])
        max = Math.max(max,dp[i])
    }
    return max
};