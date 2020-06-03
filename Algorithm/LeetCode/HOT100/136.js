/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var singleNumber = function(nums) {
    let res = 0
    //相同异或为0，所以剩下的那个一定是只出现一次的元素
    for (let num of nums){
        res = num ^ res
    }
    return res
};