/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let sLen = s.length
    let result = "" 
    if(!sLen){
        return result
    }

    if(s.length === 1){
        return s
    }

    result = s.substring(0,1)
    
    
    for(let i = 1;i<sLen;i++){
        //bb
        if(s[i] === s[i-1]){
            let p1 = i-2
            let p2 = i+1
            while(p1 >= 0 && p2 <sLen && s[p1] === s[p2]){
                p1--
                p2++
            }
            if(p2-p1-1 > result.length){
                result = s.substring(p1+1,p2)
            }
        }
        //bab
        if(i-2>=0 && s[i] == s[i-2]){
            let p1 = i-3;
            let p2 = i+1;

             while(p1 >= 0  && p2 <sLen && s[p1] === s[p2]){
                p1--
                p2++
            }
            if(p2-p1-1 > result.length){
                result = s.substring(p1+1,p2)
            }
        }
    }
    return result
};