/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    if(nums.length <= 1){
        return nums
    }

    let p1 = 0
    let p2 = nums.length - 1

    while(p1 < p2){
        while(nums[p2] % 2 == 0){ //是偶数则递减（找奇数）
            p2--
        }

        while(nums[p1] % 2 == 1){ //是奇数则递增（找偶数）
            p1++
        }
  
        if(p1 < p2){
            [nums[p1],nums[p2]] = [nums[p2],nums[p1]]
            p2--
            p1++
        }
        
    } 

    return nums
};