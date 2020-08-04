/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 * 时间复杂度O(LogN)
 * 空间复杂度O(LogN)
 */
var guessNumber = function(n) {

  function recur(low,high){
      if(low > high) return

      let mid = Math.floor((low + high) / 2)
      let res = guess(mid)

      if(res === 0){
          return mid
      }else if(res === 1){
          return recur(mid+1,high)
      }else{
          return recur(low,mid-1)
      }
  }
  return recur(1,n)
};