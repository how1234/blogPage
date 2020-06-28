/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(N) 
 * 空间复杂度O(1)
 */
var minSubArrayLen = function(s, nums) {
    let res = 0

    
    let left = 0

    let sum = 0
    

 
    for(let i = 0;i<nums.length;i++){
        sum += nums[i]

        while(sum >= s){
            res = res === 0? i-left+1: Math.min(res,i-left+1)
            sum-= nums[left]
            left++
        }

    }
    
    return res
};