/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(NlogN)
 * 空间复杂度O(logN)
 * 递归分治
 */
var majorityElement = function(nums) {
    
    function findMode(nums,mode,l,r){
        let count = 0;
        for(let i = l;i<=r;i++){
            if(nums[i] === mode){
                count++
            }
        }
        return count
    }
    function helper(nums,l,r){
        //分治的重点是一个数组的众数一定是它左右数组的众数，而左右数组的众数无限往下细分，到最后一定会出现一个子数组含有答案的众数。我们就从底向上求解。

        if(l === r){ //到最小数组片段
            return nums[l] //返回众数
        }

        let mid = (l + r) >> 1
        

        let leftMode = helper(nums,l,mid)
        let rightMode = helper(nums,mid+1,r)


        //非最小数组片段
        
        //如果两个子数组的众数相同，不用比直接返回。
        if(leftMode === rightMode){
            return leftMode
        }

        //如果左右子数组的众数不同，算一下分别的子数组数量，
        
        let leftRes = findMode(nums,leftMode,l,r)
        let rightRes = findMode(nums,rightMode,l,r)

        return leftRes > rightRes ? leftMode : rightMode

        
    }
    return helper(nums,0,nums.length-1)
};