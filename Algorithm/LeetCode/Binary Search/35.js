/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //二分搜索
    let len = nums.length
    let index = 0;

    let l = 0;
    let r = nums.length

    while(l < r){
        let mid = l + (r-l >> 1)
        
        if(nums[mid] === target){
            return mid
        }    
        
        if(nums[mid] > target){
            r = mid;
        }else{
            l = mid+1
        }

        
    }
    
    return l
    
};