/**
 * @param {string} s
 * @return {character}
 * 思路就是把26个字母换成数字存在数组里面，然后对数组进行索引
 * 时间复杂度O(n)
 * 空间复杂度O(1) 常量空间
 */
var firstUniqChar = function(s) {
    let aCharCode = 'a'.charCodeAt(0)
    let arr = new Array(26).fill(0)

    for(let i=0;i<s.length;i++){
        let charCode = s.charCodeAt(i) - aCharCode
        arr[charCode]+=1
    }

    for(let i=0;i<s.length;i++){
        let charCode = s.charCodeAt(i) - aCharCode
        if(arr[charCode] === 1){
            return String.fromCharCode(charCode + aCharCode)
        }
    }
  
    return ' '
};