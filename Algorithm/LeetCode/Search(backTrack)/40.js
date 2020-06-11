/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    
    let len = candidates.length
    let res = []
    let path = []

    candidates.sort( (a,b)=>{
        if(a-b>0){
            return 1
        }else{
            return -1
        }

    })

    function helper(target,path,start){
        if(target < 0) return
        if(target === 0){
            res.push([...path])
            return
        }

        for(let i = start; i<len;i++){
            
            if(candidates[i] > target){
                break
            }
            //小剪枝，去重
            // 1.i > start 表明剪枝的分支一定不是当前层的第 1 个分支
            // 2、candidates[i - 1] == candidates[i] 表明当前选出来的数等于当前层前一个分支选出来的数
            // 因为前一个分支的候选集合一定大于后一个分支的候选集合
            // 故后面出现的分支中一定包含了前面分支出现的结果，因此剪枝
            // “剪枝”的前提是排序，升序或者降序均可


            if(i > start && candidates[i] === candidates[i-1]){
                continue
            }

            path.push(candidates[i])
            //这里i要往前进
            helper(target-candidates[i],path,i+1)
            path.pop()
        }


    }
    helper(target,path,0)
    return res
    
};