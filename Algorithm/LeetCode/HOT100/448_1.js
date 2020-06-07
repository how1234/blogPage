/**
 * @param {number[]} nums
 * @return {number[]}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var findDisappearedNumbers = function(nums) {
    let res = []
    for (let num of nums){
        let numsIndex = Math.abs(num) - 1
        
        nums[numsIndex] = -Math.abs(nums[numsIndex])
    }
    
    for(let i = 0;i<nums.length;i++){
        if(nums[i] > 0){
            res.push(i+1)
        }
    }
    return res
};