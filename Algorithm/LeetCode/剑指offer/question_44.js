/**
 * @param {number} n
 * @return {number}
 * 找规律的题
 */
var findNthDigit = function(n) {
    let count = 9
    let digit = 1;
    let start = 1 //n所在数位的开始数字
   
    while(n > count){ //首先需要算出这个数字的位数
        n -= count
        start *= 10
        digit+=1
        count = 9 * start * digit
    }

    //在开始数字的第n个数，求出该数字
    let number = start + Math.floor((n-1) / digit)
  

    let index = (n-1) % digit //现在index是等于该数字所在digit的位置

   
    return String(number)[index]
};