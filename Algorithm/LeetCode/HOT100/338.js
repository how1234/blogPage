/**
 * @param {number} num
 * @return {number[]}
 * 时间复杂度O(N)
 */
var countBits = function(num) {
    //偶数时，比如二进制 1010 其1的个数和它除以2的是一样的，即和 101 带1个数一致

    //奇数时，加一即可，可以得出

    let res = new Array(num+1).fill(0)

    for(let i = 1;i<res.length;i++){
        res[i] = res[i >> 1] + (i & 1)
    }
    return res
};