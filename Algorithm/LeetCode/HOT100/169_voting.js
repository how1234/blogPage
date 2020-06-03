/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var majorityElement = function(nums) {
    if(!nums.length) return 

    let element = nums[0]
    let count = 1

    for(let i = 1; i<nums.length;i++){
        if(nums[i] !== element){
            count--
        }else{
            count++
        }
        if(count === 0){
            element = nums[i]
            count = 1
        }

    }
    return element
    
    
};