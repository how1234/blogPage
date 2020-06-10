/**
 * @param {number[]} cost
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var minCostClimbingStairs = function(cost) {
    //dp[i]的值爬到i层所花费的最小代价
    //结果只要返回dp[dp.length-1]，也就是到最顶层的最小代价就可以了

    let len = cost.length;

    if(len === 1) return cost[0]
    if(len === 2) return cost[1]

  
    //初始化dp方程
    let dp = new Array(len)
 
    dp[0] = cost[0]
    dp[1] = cost[1]
    
    for(let i = 2;i<len;i++){
        //到达i层阶梯有两种办法
        //1.从i-2层一下子爬两层
        //2.从i-1层爬一层
        //所以状态转移方程如下
        dp[i] = Math.min(dp[i-2],dp[i-1])+cost[i]
    }
    
    //最后比较从倒数第二个台阶跳的代价小，还是从倒数第一个台阶跳的代价小
    return Math.min(dp[len-1],dp[len-2])

    
    
};