/**
 * @param {number[]} nums
 * @return {number[][]}
 * 时间复杂度O(N*N!)
 */
var permute = function(nums) {
    let visited = new Array(nums.length).fill(0)
    let res = []
    let path = []
    helper()
    function helper(){
        if(path.length === nums.length){
            res.push([...path])
            return
        }
        //N!
        for(let i = 0;i<nums.length;i++){
            if(visited[i]){
                continue
            }
            visited[i] = 1
            path.push(nums[i])
            helper()
            visited[i] = 0
            path.pop()
        }

    }
    return res
};