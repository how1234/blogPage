/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var lastRemaining = function(n, m) {
    //  最终剩下一个人时的安全位置肯定为0，反推安全位置在人数为n时的编号
    // 人数为1： 0
    // 人数为2： (0+m) % 2
    // 人数为3： ((0+m) % 2 + m) % 3
    // 人数为4： (((0+m) % 2 + m) % 3 + m) % 4
        let res = 0
    
        for(let i = 2;i<=n;i++){
            res = (res+m) % i 
            
        }
        return res
    };