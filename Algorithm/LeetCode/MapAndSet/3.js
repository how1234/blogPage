/**
 * @param {string} s
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(M)，重复字符的个数
 */
var lengthOfLongestSubstring = function(s) {
  //键值对是 “重复字符”:"重复字符最后一次出现的下标"
  let map = new Map()
  let l = 0
  let res = 0;

  //1.使用滑动窗口维护子串

  for(let r = 0;r<s.length;r++){
      //2.遇到当前字串中已有字符时，左指针移动到上次重复字符出现的下标位置
      // map.get(s[r]) >= l 表示重复字符必须在当前的滑动窗口里
      if(map.has(s[r]) && map.get(s[r]) >= l){
          l = map.get(s[r]) + 1
      }
      //并记录下当前字串长度
      res = Math.max(res,r-l+1)
      map.set(s[r],r)
  }
         
  return res
};