/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    let res = []
    let path = []
    function helper(starNumber,sum){
        if(sum === 0 && path.length === k){
            res.push([...path])
            return 
        }
        //从1加到9
        for (let i = starNumber;i<=9;i++){
            path.push(i)
            helper(i+1,sum-i)
            path.pop()
        }

    }

    //从1开始加
    helper(1,n)
    return res
};