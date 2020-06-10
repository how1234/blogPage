/**
 * @param {number[]} cost
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var minCostClimbingStairs = function(cost) {
    //dp[i]的值爬到i层所花费的最小代价
    //结果只要返回dp[dp.length-1]，也就是到最顶层的最小代价就可以了

    let len = cost.length;
    
    if(len === 1) return cost[0] 
    if(len === 2) return cost[1]


    //对于非顶层的台阶cost有如下的函数
    //f(n) = min(f(n-2),f(n-1)) + cost(n)
    
    let secondPre = cost[0] //f(n-2)
    let pre = cost[1] //f(n-1)


    for(let i = 2;i<len;i++){
        let cur = Math.min(secondPre,pre) + cost[i] //f(n) = min(f(n-2),f(n-1)) + cost(n)
        secondPre = pre //f(n-2) = f(n-1)
        pre = cur //f(n-1) = f(n)

    }     

    return Math.min(secondPre,pre)

    
    
};