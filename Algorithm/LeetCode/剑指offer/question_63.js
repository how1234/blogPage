/**
 * @param {number[]} prices
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var maxProfit = function(prices) {
    if(!prices.length){
        return 0
    }

    let min_boughtPrice = prices[0]; //最低买入价
    let profit = 0; //最大利润

    for(let i = 1;i<prices.length;i++){
        profit = Math.max(prices[i] - min_boughtPrice,profit) //记录最高利润
        min_boughtPrice = Math.min(prices[i],min_boughtPrice) //记录最低买入价
    }
    return profit
};