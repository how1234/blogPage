/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var maxSubArray = function(nums) {

    if(!nums.length) return 0 //数组为空

    //初始化连续子数组和
    let pre = nums[0]
    let max = nums[0]

    for(let i = 1;i<nums.length;i++){
        //到目前位置的最大子数组和，有两种情况
        //前面数字加上该数字的子数组和
        //前面的数字舍弃，从该数字开始。

        let cur = Math.max(pre+nums[i],nums[i])
        //更新到目前为止的子数组和的最大值
        max = Math.max(cur,max)
        pre = cur

    }
    return max

};