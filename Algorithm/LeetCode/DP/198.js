/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var rob = function(nums) {
    let dp = new Array(nums.length)
    dp[-1] = 0;
    dp[-2] = 0; //防止溢出
    //某一天的最大收益有两种情况
    //1.偷该间房子的收益
    //2.不偷该间房子，偷之前那栋房子的收益
    for(let i = 0;i<nums.length;i++){
        dp[i] = Math.max(nums[i]+dp[i-2],dp[i-1])
    }
    return dp[nums.length-1]
};