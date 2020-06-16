/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 时间复杂度O(logN)
 * 空间复杂度O(1)
 */
var search = function(nums, target) {
    //二分查找
    let len = nums.length

    if(!len) return -1

    let l = 0
    let r = len
    let res = -1
    while(l<r){
        let mid = l + (r-l >> 1)
        
        if(nums[mid] > target){
            r= mid

        }else if(nums[mid] < target){
            l = mid + 1
        }else{
            res = mid
            break
        }

    }
    return res
    
};