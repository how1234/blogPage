/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = []
    let path = []
    let visited = new Array(nums.length).fill(0)

    nums.sort((a,b)=>{
        if(a>b){
            return 1
        }else{
            return -1
        }
    })
    helper()
    function helper(){
        
        if(path.length === nums.length){
            res.push([...path])
            return
        }

        for(let i = 0;i<nums.length;i++){
            if(visited[i]){
                continue
            }
            //写 !visited[i - 1] 是因为 nums[i - 1] 在深度优先遍历的过程中刚刚被撤销选择
            if(i>0 && nums[i] === nums[i-1] && !visited[i-1]){
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