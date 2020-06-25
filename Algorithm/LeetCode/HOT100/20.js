/**
 * @param {string} s
 * @return {boolean}
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var isValid = function(s) {
    
    let map = {')':'(','}':'{',']':'['}
    let stack = []
    
    for( let i = 0;i<s.length;i++){
        
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i])
        }else{
            let el = stack.pop()
            if(map[s[i]] != el){
                return false
            }
            
        }
    }
 
    return stack.length === 0
};