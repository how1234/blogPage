/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    
    let i = x ^ y
    let count = 0;
    while(i != 0){
        if(i & 1){
            count++
        }
        i=i>>1
    }
    return count
};