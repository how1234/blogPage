/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let len = nums.length;
    if(len === 0){
        return 0
    }else if (len === 1){
        return nums[0]
    }

    let max = nums[0];
    
    var dp = new Array(nums.length)

    for (let i = 0; i<dp.length;i++){
        dp[i] = new Array(2).fill(0)
    }

    dp[0][0] = nums[0] //positive
    dp[0][1] = nums[0] //negative
    
    for (let i=1;i<len;i++){

        dp[i][0] = Math.max(dp[i-1][0]*nums[i],dp[i-1][1]*nums[i],nums[i])
        dp[i][1] = Math.min(dp[i-1][0]*nums[i],dp[i-1][1]*nums[i],nums[i])
        
        max = Math.max(max,dp[i][0])
    }
    return max

    
    
    
};