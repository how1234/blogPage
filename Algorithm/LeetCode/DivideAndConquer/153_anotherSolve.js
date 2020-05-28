/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(logN)
 * 空间复杂度O(1)
 */
var findMin = function(nums) {
  
    //对于这道题。我们需要找这么一个乱序点。
    //比如[4,5,6,7,0,1,2]
    //这个点的值为0
    //正常情况是数组中的除了第一位，其中任意一点一定大于前点。
    //当前一个数大于后一个数时，证明该点或者前点发生了乱序，就是为我们要找的乱序点。

    if(nums.length === 1){ //只有一个数的情况
        return nums[0]
    }

    if(nums[nums.length-1] > nums[0]){ //无乱序情况
        return nums[0]
    }

    let left = 0, right = nums.length-1;

    //二分查找
    while(left < right){
        let mid = (left+right) >> 1
        //如果当前点大于当前区间最右侧的点，证明该点之前为正常排序，乱序点在右侧
        if(nums[mid] > nums[right]){
           left = mid + 1
        }else{
           //如果当前点小于当前区间最右侧的点，证明该点之后为正常排序，乱序点在左侧或者它本身。
           //不能mid-1，因为right自己可能指向的就是乱序点
           right = mid 
        }
        
    }
    return nums[left]
    
};