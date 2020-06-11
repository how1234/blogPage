/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 时间复杂度指数级
 * 空间复杂度O(N)
 * 
 */
var combinationSum = function(candidates, target) {
    let len = candidates.length
    let res = []
    candidates.sort( (a,b) => {
        if(a-b < 0){
            return -1
        }else{
            return 1
        }
    })
    let path = []
    helper(target,path,0,candidates.length)
    //begin的设置是为了防止这种情况的出现，比如[1,2,3]，用完1之后，剩下搜索就不用1了，防止出现[2,1] [1,2]这样的重复子集
    function helper(target,path,begin){
        if(target < 0) return 
        if(target === 0){
            res.push([...path])
            return
        }

        for(let i = begin;i<len;i++){
            if(target < candidates[i]) break //如果要添加的数大于了剩下的目标和，那后面则没必要接着遍历了;
            path.push(candidates[i])
            helper(target-candidates[i],path,i)
            path.pop()
        }

        

    }
    return res
};