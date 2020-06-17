/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var longestSubsequence = function(arr, difference) {
    //dp[i]表示在第i位中最长等差子序列的长度
    //dp[i] = dp[i]-difference + 1


    let map = new Map()
    let ans = 1

    for (let i = 0;i<arr.length;i++){
        let temp = 0
        if(map.has(arr[i] - difference)){
            temp = map.get(arr[i]-difference) + 1
            map.set(arr[i],temp)
        }else{
            temp = 1
            map.set(arr[i],temp)
        }
   
        ans = Math.max(ans,temp)

    }
    return ans


};