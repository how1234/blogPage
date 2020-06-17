/**
 * @param {number[]} prices
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var maxProfit = function(prices) {
    
    if(!prices.length) return 0
    let min = prices[0]; //买入价
    let res = 0 //收益

    for (let i = 1;i<prices.length;i++){
        //更新收益
        res = Math.max(prices[i] - min,res)
        //更新最低买入价
        min  = Math.min(min,prices[i])

    }
    return res

};