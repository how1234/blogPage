/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 时间复杂度O(LogN)
 * 空间复杂度O(1)
 */
var search = function(nums, target) {
    //二分查找

    //如果中间的点小于右边的点，则该点右侧为有序
    //如果中间的点小于左边的点，则该点左侧为有序
    

    let len = nums.length
    if(!len) return -1

    let l = 0
    let r = len - 1 

    while(l<=r){
        let mid = l + ( (r-l) >> 1)
        
        if(nums[mid] === target) return mid

        //左侧有序，target在[left,mid]之间
        if(nums[mid] >= nums[l]){
           
            //如果target满足小于左侧有序数组的最大数字，并且大于左侧有序数组的最小数字，就往左找
            if(target >= nums[l] && target <= nums[mid]){
                r = mid-1
            }else{
                //target 不在[left,mid]之间
                l = mid+1
            }
        //右侧有序，target在[mid,right)之间
        }else{
            
            //如果target满足大于右侧有序数组的最小数字，并且小于右侧有序数组的最大数字，就往右找
            //target在[mid,right]之间
            if(target >= nums[mid] && target <= nums[r]){
                l = mid+1
            }else{
                //target 不在[mid,right]之间
                r = mid-1
            }
        }


    }

    return -1
};