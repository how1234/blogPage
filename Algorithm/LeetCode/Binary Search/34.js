/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度O(logN + M) N为数组长度，M为target个数
 * 空间复杂度O(1) 常数级存储空间
 */
var searchRange = function(nums, target) {
    //二分查找

    let len = nums.length
    let res = [-1,-1]
    if(!len) return res
    let resIndex = -1

    let l = 0;
    let r = len

    while(l<r){
        let mid = l + (r-l >> 1)
        
        if(nums[mid] > target){
            r = mid;
        }else if(nums[mid] < target){
            l = mid+1
        }else{
            resIndex = mid
            break;
        }

    }

    
    //找到一个点以后 以该点为中心从左往右扩展
    if(resIndex > -1){
        res = [resIndex,resIndex]
        //找右边界
        for(let i = resIndex;i<len;i++){
            
            if(nums[i] !== target){
                res[1] = i-1
                break;
            }
            //到达边界
            if(i === len-1){
                res[1] = len-1
                break;
            }
        }
        //找左边界
        for(let i = resIndex;i>=0;i--){
            if(nums[i] !== target){
                res[0] = i+1
                break;
            }
            //到达边界
            if(i === 0){
                res[0] = i
                break;
            }
        }

        return res
    }else{
        return res
    }

};