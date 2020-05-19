/**
 * @param {string} s
 * @return {boolean}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var validPalindrome = function(s) {
    let r = s.length-1, l = 0;

    if(!s.length) return true //空字符串为true

    while(l <= r){
        if(s[l] !== s[r]){ //如果有一个字符不同，则传进去让他们比，删除左字符或者右字符。
            return isValid(l+1,r) || isValid(l,r-1)
        }
        l++
        r--
    }
    return true

    function isValid(l,r){ //判断回文出串
         while(l <= r){
            if(s[l] !== s[r]){
                 return false
            }
            l++
            r--
        }
        return true
    }
    
    
};