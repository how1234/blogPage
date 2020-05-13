/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums){
    
    let left = 0
    let right = nums.length-1

    while(left <= right){
        let mid = (right + left) >> 1

        if(nums[mid] == mid){
            left = mid + 1
        }else{
            right = right - 1
        }
    }
    return left
};