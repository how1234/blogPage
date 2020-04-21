/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    function binaryExpotential(base,n){
        if(n < 0){
            base = 1/base
            n = -n
        }
        if(n === 0){
            return 1
        }
        if(n === 1){
            return base
        }
        let result = binaryExpotential(base,n >> 1)
        result *= result
        if(n & 1){
            result *= base
        }
        return result
    }
    let sum = binaryExpotential(10,n)
    let arr = []
    let i = 1
    while(i<sum){
        arr.push(i)
        i++
    }
    return arr
};