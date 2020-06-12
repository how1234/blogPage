/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let subArrayLen;
    let res = []
    let path = []
    let len = nums.length
    nums.sort( (a,b) => {
        if(a>b){
            return 1
        }else{
            return -1
        }
        
    })

    //给定子集长度，对每个子集从0遍历生成结果。
    for (subArrayLen = 0;subArrayLen<=len;subArrayLen++){
        helper(0)
    }

    function helper(index){
        if(path.length === subArrayLen){
            res.push([...path])
            return
        }
        for (let i = index;i<len;i++){
            //比起78题，多了个排序去重。
            if(i > index && nums[i] === nums[i-1]){
                continue
            }
            path.push(nums[i])
            helper(i+1)
            path.pop()
        }
      

    }
    
    return res
};