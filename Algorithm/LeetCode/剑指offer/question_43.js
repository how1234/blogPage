/**
 * @param {number} n
 * @return {number}
 * 重点是得出公式
 * 当前位数current，高位high，地位low，当前位数digit（比如个位是1，十位是10）
 * 当current = 0 时，1的出现次数是high * digit
 * 当current = 1 时， 1的出现次数是high * digit + low + 1
 * 当current > 1时，1的出现次数是(high + 1) * digit
 * 然后对当前数字的每一位进行如上计算，即可得出答案
 * 参考 https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/solution/mian-shi-ti-43-1n-zheng-shu-zhong-1-chu-xian-de-2/
 */
var countDigitOne = function(n) {
    let res = 0
    let digit = 1; 
    let high = Math.floor(n/10),
    cur = n%10,
    low = 0
    while(high !== 0 || cur !== 0){
        if(cur === 0){
            res += high * digit
        }else if(cur === 1){
            res += high * digit + low + 1
        }else{
            res += (high + 1) *digit
        }
        low += cur*digit
        cur = high % 10

        high = Math.floor(high/10)
        digit *= 10
    }
    return res
};