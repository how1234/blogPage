/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var findUnsortedSubarray = function(nums) {
    //从左到右找出最后一个破坏递增的数
    //从右到左找出最后一个破坏递减的数
    if(nums.length <= 1) return 0
    let max = nums[0]
    let min = nums[nums.length-1]
    let high = 0 //需要调整的最大位置
    let low = nums.length-1  //需要调整的最小位置

    for(let i = 1;i<nums.length;i++){
        
        max = Math.max(max,nums[i])
        min = Math.min(min,nums[nums.length-1-i])
        if(nums[i] < max) high = i
        if(nums[nums.length-1-i] > min) low = nums.length-1-i
       

    }
    return high > low ? high - low + 1 : 0

};