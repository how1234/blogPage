var maxSlidingWindow = function(nums, k) {
    if(nums.length === 0) return []

    let result = []
    for (let i = k;i <= nums.length;i++){
        let ans = Math.max(...nums.slice(i-k,i))
        result.push(ans)
        
    }
    return result
};



var maxSlidingWindow = function(nums, k) {
    if (nums.length ===0) return []

    let res = []
    let windows = []

    for(let i = 0; i<nums.length;i++){
        if(i >= windows[0] + k){
            windows.shift()
        }

        while(nums[windows[windows.length-1]] < nums[i]){
            windows.pop()
        }
        windows.push(i)


        if(i >= k-1){  //Must bigger than the smallest number
            res.push(nums[windows[0]])
        }
    }

    return res

};