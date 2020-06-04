/**
 * @param {number[]} nums
 * @return {number[]}
 * 时间复杂度O(N) 遍历两次
 * 空间复杂度O(N) 输出数组
 */
var productExceptSelf = function(nums) {
    let left = 1;
    let right = 1;

    //从左相乘一遍，再从右相乘一遍
    let outputNums = new Array(nums.length)

    for (let i = 0;i<nums.length;i++){
        outputNums[i] = left //到该数不乘
        left *= nums[i]
    }
    
    for(let i = nums.length-1;i>=0;i--){
        outputNums[i] *= right 
        right *= nums[i]
    }

    return outputNums
};