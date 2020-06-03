/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var moveZeroes = function(nums) {
    //index表示非0的数的个数
    let index = 0;

    for(let i = 0;i<nums.length;i++){
        if(nums[i]){
            nums[index] = nums[i]
            index++
        }
    }

    for(let i = index;i<nums.length;i++){
        nums[i] = 0
    }

    return nums
};