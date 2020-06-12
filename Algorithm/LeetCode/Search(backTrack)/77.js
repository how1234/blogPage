/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = []
    let path = []

    function helper(number,path){
        if(path.length === k){
            res.push([...path])
        }

        for(let i = number;i<=n;i++){
            path.push(i)
            helper(i+1,path)
            path.pop()
        }
     
    }

    helper(1,path)
    return res
};