/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let res = []
    let path = []

    function isDigital(ch){
        reg = /^[A-Z]+$/;
        return reg.test(ch)
    }
    function helper(index){
    
        if(path.length === S.length){
            res.push(path.join(''))
            return 
        }

        if(index >= S.length){
            return
        }
        //如果非数字

        if(isNaN(S[index])){

            path.push(S[index])
            helper(index+1)
            path.pop()
            if(!isDigital(S[index])){
                path.push(S[index].toUpperCase())
                helper(index+1)
                path.pop()
                
            }else{
                path.push(S[index].toLowerCase())
                helper(index+1)
                path.pop()
            }
            

       
            
        }else{
            path.push(S[index])
            helper(index+1)
            path.pop()
        }
        
    }
    helper(0)
    return res
};