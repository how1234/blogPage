/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 * 投票算法
 */
var majorityElement = function(nums) {
    let count = 0;
    let element = null;

    for(let i = 0;i < nums.length;i++){

        if(count === 0){
            element = nums[i]
        }

        count+= (nums[i] === element) ? 1 : -1

     
    }

    return element
};