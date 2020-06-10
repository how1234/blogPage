/**
 * @param {number} n
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var tribonacci = function(n) {
    //返回f(n)
    //f(n) = f(n-3) + f(n-2) + f(n-1)

    //边界情况
    if(n === 0) return 0
    if(n === 1) return 1
    if(n === 2) return 1


    let secondPre = 0 //f(n-3)
    let firstPre = 1 //f(n-2)
    let pre = 1 //f(n-1)
 
    for(let i = 3;i<=n;i++){ //从n=3开始算到f(n)
        let cur = secondPre + firstPre + pre //f(n) = f(n-3) + f(n-2) + f(n-1)
        secondPre = firstPre //f(n-3) = f(n-2)
        firstPre = pre //f(n-2) =  f(n-1)
        pre = cur //f(n-1) = f(n)
        
    }

    return pre
    
};