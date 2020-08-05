/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var rob = function(nums) {
  if(!nums.length) return 0
  
  //f(n) = max( f(n-2)+ nums[n] + f(n-1))
  //1.偷该间房子的收益加隔着一栋房子的那栋房子的收益。
  //2.不偷该间房子，偷之前那栋房子的收益
  //初始化的时候最大收益
  //第一间屋子的最大收益是当天偷
  let dp0 = nums[0] 
  //第二间屋子的最大收益是第一间与第二间屋子的较大值
  let dp1 = nums[1] > nums[0] ? nums[1] : nums[0]

  for(let i = 2;i<nums.length;i++){
      dp2 = Math.max(dp0+nums[i],dp1)
      dp0 = dp1
      dp1 = dp2
  }
  return dp1
};