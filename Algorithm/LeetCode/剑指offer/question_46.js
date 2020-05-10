/**
 * @param {number} num
 * @return {number}
 * 典型动归题
 */
var translateNum = function(num) {
    num = String(num)
    if(num.length === 1){
        return 1
    }else if(num.length === 0){
        return 0
    }
    let dp = new Array(num.length+1).fill(0)
    dp[0] = 1 //当字符串长度为2时，dp[0] + dp[1]有可能是出现2种排列方式，也就是倒推dp[0] = dp[2] - dp[1] = 1
    dp[1] = 1


    for (let i=2;i<dp.length;i++){
        let secondPreNumber = String(num[i-2])
        let preNumber = String(num[i-1])

        if( secondPreNumber ==='0' || Number(secondPreNumber + preNumber) > 25){
            dp[i] = dp[i-1]
        }else{
            console.log('here')
            dp[i] = dp[i-1] + dp[i-2]
        }
    }
    return dp[num.length]
};