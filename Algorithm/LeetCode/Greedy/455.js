/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 时间复杂度O(max(m,n)Log(max(m,n)))，m和n分别为数组g和s的长度
 * 空间复杂度O(1)
 */
var findContentChildren = function(g, s) {
  //贪心算法，局部最优

  //局部最优就是最小的饼干满足胃口最小的孩子，这样就可以以最小的代价来获得最大的输出
  
  //先将两个数组升序排列
  g.sort( (a,b) => a-b)
  s.sort( (a,b) => a-b)

  //保持一个指针，指向孩子的胃口值数组
  let gP = 0

  s.forEach( el => {
      //能满足就+1，指针
      if(el >= g[gP]){
          gP+=1
      }
  })
  //指针最后所处的位置就是满足的孩子的数量
  return gP
  
};