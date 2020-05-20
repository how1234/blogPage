/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 时间复杂度O(N2) 需要双层遍历
 * 空间复杂度O(N) 建立长度为N的辅助数组
 */
var numberOfSubarrays = function(nums, k) {
    let prefixArr = new Array(nums.length+1).fill(0)
    let res = 0;
    prefixArr[0] = 0 //第i-1个位置奇数出现的次数。prexArr[1] 就是 nums[0]奇数出现的次数

    for(let i = 0;i < nums.length;i++){
        prefixArr[i+1] = prefixArr[i] + (nums[i]&1)
        
        for(let j = 0;j<=i;j++){
            if(prefixArr[i+1] - prefixArr[j] === k ){ //当前位置的奇数与之前位置出现的奇数相减，得到子数组
                res++
            }
        }
    
    }

    return res;
};