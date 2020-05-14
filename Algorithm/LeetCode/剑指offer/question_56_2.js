/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度(O(N))，对每一个数字进行32次的移位以及取值。最后进行一次常数级的遍历和输出。总体来说是O(N)
 * 空间复杂度(O(1))，常数数组
 */
var singleNumber = function(nums) {
    let bitsArray = new Array(32).fill(0)

    for(let num of nums){
        for(let i = 0;i<bitsArray.length;i++){
            bitsArray[i] += num & 1
            num = num >> 1
        }
    }
    //核心原理就是，在二进制数组中，出现3次的数字加起来的值，在二进制数组每个数位显示一定是3。
    //比如[1,1,3,1] 在二进制数组中显示就是[0,0,1,4] 
    //我们对二进制数组的每个位数进行对3取余的运算，剩下的一定是只出现一次数字的二进制表示。
    let m = 3;
    let res = ''
    
    for(let i = bitsArray.length-1;i>=0;i--){
        res += bitsArray[i] % m
    }
    return parseInt(res,2)
    


};