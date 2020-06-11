/**
 * @param {string} digits
 * @return {string[]}
 * 时间复杂度（2的l次幂），l为digits的长度
 * 空间复杂度O(l)
 */

let indexLetter = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
var letterCombinations = function(digits) {
    let res = []
    if(!digits.length) return res

    //''为组合字段
    function helper(combination,next_string){
        if(next_string.length === 0){
            res.push(combination)
        }else{
            let curChar = next_string[0]
            for(let char of indexLetter[curChar]){
                helper(combination+char,next_string.substring(1))
            }
        }
    }
    
    helper('',digits)
    return res
};