/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    if(!str.length){
        return 0
    }
    str = str.trim()

    let index = 0;
    let flag = 1 //符号位
    let res = 0 //
    


    if(str[0] == '-'){
        flag = -1
        index = 1
    }else if(str[0] == '+'){
        flag = 1 
        index = 1
    }else{
        index = 0;
    
    }

    while(index < str.length){
        let char = str[index]
       
        if(char >= "0" && char <= "9"){  
            res = res * 10 + (+char)
            index++
          
        }else{
            break;
        }
    }
    if(flag * res < -Math.pow(2,31)){
        return flag * Math.pow(2,31)
    }

    if(flag * res > Math.pow(2,31)-1){
        return flag * Math.pow(2,31)-1
    }
   
    
    
    return flag * res
};