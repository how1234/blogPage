/**
 * @param {number[]} nums
 * @return {number[]}
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var findDisappearedNumbers = function(nums) {
    let set = new Set();
    let res = []
    for (let num of nums){
        set.add(num)
    }   
    
    for(let i = 1;i<=nums.length;i++){
        if(!set.has(i)){
            res.push(i)
        }
    }
    return res
};