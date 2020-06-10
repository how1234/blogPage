/**
 * @param {number} x
 * @return {boolean}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var isPalindrome = function(x) {
    x = x.toString()
    if(!x.length) return true
    let l = 0
    let r = x.length-1

    while(l<r){
        if(x[l] != x[r]){
            return false
        }
        l++
        r--
    }

    return true

};