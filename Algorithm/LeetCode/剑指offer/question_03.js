/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    for (let i = 0; i<nums.length;i++){
        let curNumber = nums[i]
        if(curNumber !== i){
            let temp = nums[curNumber]
            if(temp === curNumber){
                return temp
            }else{
                nums[i] = temp
                nums[curNumber] = curNumber
            }
            
        }
    }
};