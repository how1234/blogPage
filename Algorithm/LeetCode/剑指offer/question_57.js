/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var twoSum = function(nums, target) {
    //哈希法
    let set = new Set()

    for(num of nums){
        if(set.has(target-num)){
            return [num,target-num]
        }else{
            set.add(num)
        }
    }
    
    return null
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 空间复杂度O(1)
 * 时间复杂度O(N)
 * 
 */
var twoSum = function(nums, target) {
    //双指针法，因为是个有序数组

    let leftP = 0
    let rightP = nums.length-1

    while(leftP <= rightP){
        if(nums[leftP] + nums[rightP] > target){
            rightP--
        }else if(nums[leftP] + nums[rightP] < target){
            leftP++
        }else{
            break
        }
    }    
    return [nums[leftP],nums[rightP]]

};