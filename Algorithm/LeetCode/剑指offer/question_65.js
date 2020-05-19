/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * 
 */

// a + b等价于(a^b) + ((a & b) << 1), （a^b)是未进位之和， (a&b) << 1表示进位。直到进位为0，返回(a^b)
var add = function(a, b) {
    while(a != 0){ //进位不为0
        let temp = a ^ b //异或 求 未进位的和
        a = (a & b) << 1 //求进位
        b = temp
        
    }
    return b
};