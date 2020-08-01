/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 时间复杂度(M+N)，M为S的长度，T为N的长度
 * 空间复杂度O(K),K为字符串T里不同字符的个数
 */
var minWindow = function(s, t) {
  //双指针维护窗口
  let l = 0;
  let r = 0;
  const map = new Map();
  //时间复杂度(M),M为T的长度
  //空间复杂度(K)，K为T里面不同字符的个数
  for(let c of t){
      map.set(c, map.has(c) ? map.get(c) + 1: 1)
  }

  let res = ""
  let resLen = Number.MAX_SAFE_INTEGER

  let charsNeeded = map.size
  
  //先找到最大的满足条件的字串，然后逐渐缩小
  //时间复杂度O(N)，N为S的长度，因为实际上就是移动左指针和右指针，加起来移动了S的长度
  while(r < s.length){
      let charR = s[r]

      if(map.has(charR)){
          map.set(charR,map.get(charR) - 1)
          //如果某种字符的数量被满足了，charsNeeded就减去1
          if(map.get(charR) === 0) charsNeeded -=1
      } 

      //charsNeeded等于0就意味着当前滑动窗口里面的字串符合要求，需要逐渐减小字串长度
      while(charsNeeded === 0){
          //满足条件时，记录当前字串的长度
          let tempRes = s.substring(l,r+1)
          if(tempRes.length < resLen){
              res = tempRes
              resLen = tempRes.length
          }

          let charL = s[l]
          if(map.has(charL)){
              map.set(charL,map.get(charL) + 1)
              //如果某种字符数量不被满足，charsNeeded就加一，意味着当前字串不满足了，跳出整个循环，重新寻找字串
              if(map.get(charL) === 1) charsNeeded+=1 
          }
          //满足情况的话接着左移
          l++
      }
      r++

  }


  //返回最小字串
  return res
};