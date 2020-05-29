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
    //正常情况是数组中的除了第一位元素，其中任意一元素一定大于前面元素。
    //当前一个数大于后一个数时，证明该点或者前点发生了乱序，前点/该点就是为我们要找的乱序点。

    if(nums.length === 1){ //只有一个数的情况
        return nums[0]
    }

    if(nums[nums.length-1] > nums[0]){ //无乱序情况
        return nums[0]
    }

    let left = 0, right = nums.length-1;

    //二分查找
    while(left <= right){
        let mid = (left+right) >> 1
        //下面两个判断是发现当前一个元素大于后一个元素时，证明发生了乱序。
        if(nums[mid] < nums[mid-1]){ //该点小于前点，证明该点发生了乱序，直接返回答案。
            return nums[mid]
        }
         if(nums[mid] > nums[mid+1]){ //该点大于前点，证明前点发生了乱序，直接返回答案。
            return nums[mid+1]
        }
        //如果该点是已经发生乱序之后的了，nums[mid] < nums[0]
        //证明乱序点在该点左侧。
        if(nums[mid] < nums[0]){ 
            right = mid - 1;
        }
        //如果该点尚未发生乱序，nums[mid] > nums[0]
        //证明乱序点在该点右侧
        if(nums[mid] > nums[0]){ 
            left = mid + 1
        }
    }
    return -1 //找不着
    
};