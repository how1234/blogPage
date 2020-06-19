/**
 * @param {string} s
 * @return {boolean}
 * 时间复杂度O(N)
 * 空间复杂度O(1) 
 */
var isPalindrome = function(s) {
    //双指针法
    //先清除符号
   
    let reg = new RegExp("[A-Za-z0-9]")

    let filtertedS =""
    for(let i = 0;i<s.length;i++){
        if(reg.test(s[i])){
            filtertedS+=s[i].toLowerCase()
        }
    }

    let len = filtertedS.length
    if(len === 0) return true
    if(len === 1) return true
    if(len === 2) return filtertedS[0] === filtertedS[1]
    //双指针法
    let l;
    let r;
    
    if(filtertedS.length % 2 === 1){ //奇数
        l = filtertedS.length >> 1
        r = filtertedS.length >> 1
    }else{ //偶数
        l = (filtertedS.length >> 1) - 1
        r = filtertedS.length >> 1
    }
    

    while(l >= 0 && r <= filtertedS.length){
       
        
        if(filtertedS[l] !== filtertedS[r]){
            return false
        }

        l--
        r++
    }
   
    if(l !== -1 || r !== filtertedS.length){
        return false
    }
    
    
    
    return true
};