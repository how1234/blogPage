/**
 * @param {number[]} nums
 * @return {number[][]}
 * 时间复杂度(N * 2的n次方)
 * 空间复杂度(N * 2的n次方)
 */
var subsets = function(nums) {
    let len = nums.length;
    let res = []
    let path = []
    let subArrayLen = 0;

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
            path.push(nums[i])
            helper(i+1)
            path.pop()
        }
      

    }
    
    return res
    
};