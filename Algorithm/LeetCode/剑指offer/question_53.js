/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 查找该值出现的左边界
 * 
 */
var search = function(nums, target) {
    return leftBound(nums,target) - leftBound(nums,target-1)

    function leftBound(nums,target){
    
        let right = nums.length - 1
        let left  = 0

        while(left <= right){
            let mid = (right+left) >> 1
            
            if(nums[mid] > target){
                right = mid - 1
            }else{
                left = mid + 1
            }
        }
        return left
    }
};