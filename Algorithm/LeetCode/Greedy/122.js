/**
 * @param {number[]} prices
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var maxProfit = function(prices) {
  //贪心算法
  //和前一天比只要高就卖，其实相当于多段买卖

  let res = 0

  for(let i = 1;i<prices.length;i++){
      if(prices[i] > prices[i-1]){
          res += prices[i] - prices[i-1]
      }
  }
  return res
};