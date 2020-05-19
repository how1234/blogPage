/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    //利用短路特性完成递归，当n为真（>0)的时候，n+=(sumNums(n-1))
    n = n && (n += sumNums(n-1));
    return n
};