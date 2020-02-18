/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    var obj = {}
    
    for (i in nums){
        
        if(obj[target-nums[i]]){
            return [obj[target-nums[i]],i]
        }
        obj[nums[i]] = i;
    }
};