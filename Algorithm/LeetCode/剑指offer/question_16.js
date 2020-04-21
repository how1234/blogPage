/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
   
    if(n < 0){ //判断指数为负的情况，只判断一次
        x = 1/x
        n = -n
    }

    if(n === 0){
        return 1
    }
    if(n === 1){
        return x
    }

    let result = myPow(x,n >> 1) 
    result *= result
    if(n & 1 === 1){ //判断是否为奇数
        result *= x
    }
    if(result === Infinity){ //边界值判断
        return 0.0
    }
    return result
  
};