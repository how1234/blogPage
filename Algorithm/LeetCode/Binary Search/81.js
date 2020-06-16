/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    //二分查找

    //每次二分都会分出两个数组，要么左边有序，要么右边有序。
    //(1)对于左边有序数组来说
    //a.target在左边有序数组中
    //b.target不在有序数组中

    //(2)对于右边有序数组来说
    //a.target在右边有序数组中
    //b.target不在有序数组中


    
    let len = nums.length
    if(!len) return false

    let l = 0
    let r = len - 1

    while(l <= r){

        //多一个处理重复数字的过程
        while(l < r && nums[l] === nums[l+1]) l++
        while(l < r && nums[r] === nums[r-1]) r--
        
        let mid = l + (r-l >> 1)
        
      
        
        //找到答案
        if(nums[mid] === target) return true
        
        //左边有序
        if(nums[mid] >= nums[l]){
            //target在左边有序数组中
            if(target >= nums[l] && target <= nums[mid]){
                r = mid - 1 
            }else{
                l = mid + 1
            }
                
        }else{
            //右边有序  
            //target在右边有序数组中
            if(target <= nums[r] && target >= nums[mid]){
                l = mid + 1
            }else{
                r = mid - 1
            }
        }



    }

    return false
};