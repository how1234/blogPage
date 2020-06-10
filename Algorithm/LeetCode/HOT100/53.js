/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var maxSubArray = function(nums) {


    if(!nums.length) return 0
    let pre = nums[0]
    let max = pre
    for(let i = 1;i<nums.length;i++){
      
        let cur = Math.max(pre+nums[i],nums[i])
        max = Math.max(cur,max)
        pre = cur
    }
    return max
};