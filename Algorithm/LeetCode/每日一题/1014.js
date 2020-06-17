/**
 * @param {number[]} A
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var maxScoreSightseeingPair = function(A) {
    //A[j] - j保持不变
    //A[i] + i可变
    //所以保持A[i]加i的最大值
    let ans = 0;
    let temp = A[0] + 0
    for(let j = 1;j<A.length;j++){
        ans = Math.max(A[j]-j+temp,ans)

        temp = Math.max(A[j]+j,temp)
    }
    return ans
};