/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(N) 2次遍历
 * 空间复杂度O(N)
 */
var longestConsecutive = function(nums) {
    //最长连续序列，也就是说1，2，3，4这样是连续序列,1,3,4这样则不连续
    if(!nums.length) return 0

    let set = new Set()
    let res = 0;
    
    for(let el of nums){
        set.add(el)
    }

    for(let x of set){
        
        if(set.has(x+1)){
            continue //找到最大的值

        }else{ //如果不存在比该数更大的连续值，比如对于数字8，数组里面不存在数字9

            let temp = 1
            while(set.has(x-1)){  //开始往下算连续值
                temp++
                x-=1
            }
           res = Math.max(temp,res)
        }

    }
    return res

    
};