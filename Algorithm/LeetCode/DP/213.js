/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var rob = function(nums) {
  //围成一圈，意味着要么抢第一个，要么抢最后一个

  if(!nums.length) return 0
  if(nums.length === 1) return nums[0]
  if(nums.length === 2) return nums[0] > nums[1] ? nums[0] : nums[1]

  //抢第一个
  let dp = new Array(nums.length)
  
  dp[0] = nums[0]
  dp[1] = nums[1] > nums[0] ? nums[1] : nums[0]
  
  for(let i = 2;i< dp.length-1;i++){
      dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
  }

  //因为最后一个肯定不抢，最大值出现在倒数第二个房屋
  let max1 = dp[dp.length-2]
  
  //抢最后一个（第一个不抢）
  
  dp[0] = 0
  dp[1] = nums[1]

  for(let i = 2;i<dp.length;i++){
      dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
  }
  let max2 = dp[dp.length-1]
  return max1 > max2 ? max1 : max2


};

/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var rob = function(nums) {
  //围成一圈，意味着要么抢第一个，要么抢最后一个

  if(!nums.length) return 0
  if(nums.length === 1) return nums[0]
  if(nums.length === 2) return nums[0] > nums[1] ? nums[0] : nums[1]

  //抢第一个
  
  let dp0 = nums[0]
  let dp1 = nums[1] > nums[0] ? nums[1] : nums[0]

  for(let i = 2;i<nums.length;i++){
      dp2 = Math.max(dp0+nums[i],dp1)
      dp0 = dp1
      dp1 = dp2
  }

  
  //因为最后一个肯定不抢，最大值出现在倒数第二个房屋(dp0)
  let max1 = dp0
  
  //抢最后一个（第一个不抢）
  
  dp0 = 0
  dp1 = nums[1]

  for(let i = 2;i<nums.length;i++){
      dp2 = Math.max(dp0+nums[i],dp1)
      dp0 = dp1
      dp1 = dp2
  }

  let max2 = dp1

  return max1 > max2 ? max1 : max2


};