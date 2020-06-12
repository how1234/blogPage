/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * 
 */
//直接从后遍历，遇到一个数就把所有子集加上该数组成新的子集，遍历完毕即是所有子集
var subsets = function(nums) {
    let res = [[]]
    for(let i = nums.length-1;i >=0;i--){
        res.forEach(element => {
            res.push(element.concat(nums[i]))
        })
    }
    return res
    
};