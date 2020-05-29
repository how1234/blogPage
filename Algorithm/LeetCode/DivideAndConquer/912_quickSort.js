/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //quickSort
    
    function helper(arr){

        if(arr.length<=1){
            return arr
        }

        let mid = arr.length >> 1
        
        let pivot = arr.splice(mid,1)[0]
        
        let left = []
        let right = []

        for(let el of arr){
            if(el < pivot){
                left.push(el)
            }else{
                right.push(el)
            }
        }
        return helper(left).concat(pivot,helper(right))
        
    }

    return helper(nums)
    
};