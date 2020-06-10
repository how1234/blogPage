/**
 * @param {number} n
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var climbStairs = function(n) {
    if(n === 0) return 0
    if(n === 1) return 1
    if(n === 2) return 2
    
    let prePre = 1 //f(n-2)
    let pre = 2 // f(n-1)

    //f(3) = f(2) + f(1)
    //f(n) = f(n-1) + f(n-2)
    for(let i=3;i<=n;i++){
        let cur = pre+prePre
        prePre = pre
        pre = cur
    }

    return pre
    

};