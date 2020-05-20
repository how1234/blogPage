/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let prefixArr = new Array(nums.length+1).fill(0)
    let res = 0;
    prefixArr[0] = 0 //第i-1个位置奇数出现的次数。prexArr[1] 就是 nums[0]奇数出现的次数
    let map = new Map();
    map.set(0,1)   //计数，键为当前位置的奇数个数，值为出现的次数。 初始化就是当前位置奇数个数为0，出现次数为1次。


    for(let i = 0;i < nums.length;i++){
        
        prefixArr[i+1] = prefixArr[i] + (nums[i]&1)
        
        //计数，计算当前位置奇数出现的次数，键为当前位置的奇数个数，值为出现的次数。
        let prev = map.get(prefixArr[i+1]) || 0 
        
        map.set(prefixArr[i+1],prev+1)

        
        //如果当前位置的奇数个数减去k值存在
        //也就是意味着之前有子集满足题意条件，所以需要加上该子集的出现次数。
        if (map.has(prefixArr[i+1]-k)){
            res += map.get(prefixArr[i+1]-k)
        }
    
    }

    return res;
};