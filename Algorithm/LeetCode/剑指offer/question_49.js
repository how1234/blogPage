/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let dp = new Array(n);
    dp[0] = 1;
  
    let p2 = 0,
      p3 = 0,
      p5 = 0;
    //设定3个指针，p2,p3,p5，初始化都指向1(dp[0])
  
    for (let i = 1; i < n; i++) {
      //第i个丑数肯定是从2，3，5 乘以指针中中产生的
      //第i个丑数肯定是第（i-1）个丑数乘以（2，3，5）的值中的最小值 
      dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
  
  
      //由于丑数是递增的，所以当第i个丑数等于p2*2时，前面的（0到p2）个数字乘以2都不可能大于该数字了，所以p2指针增加
      //同理可证p3,p5
      //可以理解为每次递增之后,各指针指向的就是他们乘以自己的因子之后等于第i个丑数的数(pointer = dp[i]/pointerValue)
      if (dp[i] === dp[p2] * 2) {
        p2++;
      }
      //这里不能用if else，因为每个对每个丑数我们都必须做多次判断，因为这三个指针其实是并行的，互相不干扰
      if (dp[i] === dp[p3] * 3) {
        p3++;
      }
      if (dp[i] === dp[p5] * 5) {
        p5++;
      }
    }
    return dp[n - 1];
  };
  