/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(logN)
 * 空间复杂度O(1)
 */
var findMin = function(nums) {
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
        //如果是一个正常的升序队列，nums[mid] 应该小于 nums[right]
        if(nums[mid] > nums[right]){  //如果该点大于目前区间最右侧的点，证明该点之前为正常升序，乱序点出现在该点的右侧，所以增大left指针。
            left = mid + 1;
        }else if(nums[mid] < nums[right]){ //如果该点小于目前区间最右侧的点，证明该点之后为正常升序，乱序点出现在该点的左侧或者它本身，所以right指针指向mid。
            right = mid
        }else{ 
            //如果该点等于最右侧的点，无法判断是否已经乱序，需要缩减区间来进行更进一步的对比。
            //比如[1,1,0,1]这种情况
            //第一次相比的时候左指针指向1（第0位），mid指针指向1（3+0/2）
            //然后缩减，右指针变成了2，左指针还是0，相当于数组变成了[1,1,0]
            //此时左指针指向1，mid指针指向1，right指针指向0
            //发现mid指针指向的1大于right指针指向的0，证明发生了乱序，乱序点出现在了该点的右侧
            //于是执行left = mid + 1，此时left指向[0]，right指针也指向0，跳出循环。
            right--
        }
    }
    return nums[left]    
};