/**
 * @param {number[]} nums
 * @return {string}
 * 基本思路就是对所有前后的字符串做一个排序，如果a加b的数字之和小于b+a的数字之和，那么a就应当放在b前面
 */
var minNumber = function(nums) {
    nums.sort( (a,b) => {
        let firstSplicedString = Number(String(a)+String(b))
        let secondSplicedString = Number(String(b)+String(a))
        
        if(firstSplicedString < secondSplicedString){
            return -1
        }else{
            return 1
        }
    })
    let res = ""

    for(let num of nums){
        res+=num
    }
    return res
};