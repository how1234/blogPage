/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 时间复杂度O(MN)
 * 空间复杂度O(M), M是去重后的数组M长度
 */
var intersection = function(nums1, nums2) {
  //1.因为输出结果每个元素是唯一，所以对nums1去重
  //时间复杂度O(N),new Set(),N这里指nums1的长度
  let set1 = new Set(nums1)

  
  //2.判断去重后的nums1 里面的数字是否存在于nums2数组中
  //时间复杂度O(MN)
  let res = [...set1].filter(item => nums2.includes(item))
  //总共O(M+MN)
  return res
  
};