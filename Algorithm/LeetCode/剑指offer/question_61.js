/**
 * @param {number[]} nums
 * @return {boolean}
 * 因为只有5张牌  
 * 空间复杂度O(N) = O(1)
 * 时间复杂度O(N) = O(1) 
 */
var isStraight = function(nums) {
    //判断是不是一个顺子
    //5张牌是否连续，A为1。且不能为14，除大小王外无重复。
    //那么判断条件如下
    //1.如果有重复则肯定不为顺子
    //2.如果不重复且最大值减最小值 < 5
    
    //判断重复选择用Set

    let set = new Set()

    for(let num of nums){
        if(num !== 0){ //判断不为大小王
            if(set.has(num)){ //判断是否重复
                return false
            }
            set.add(num)
        }
    }

    let max = Math.max(...set)
    let min = Math.min(...set)

    return max - min < 5

};