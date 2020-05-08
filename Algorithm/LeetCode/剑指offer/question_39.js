/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let votes = 0
    let result;

    for(let num of nums){
        if (votes === 0) result = num
        if(num !== result){
            votes -= 1
        }else{
            votes += 1
        }
    }
    return result
};