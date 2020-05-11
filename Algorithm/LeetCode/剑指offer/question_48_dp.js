/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length<=1){
        return s.length
    }
    let map = new Map()

    let dp = new Array(s.length).fill(0)

    dp[0] = 1
    map.set(s[0],0)

    for (let i=1;i<s.length;i++){
        let char = s[i]
        if(map.has(char)){
            let distance = i - map.get(char) //判断该字符距离上一次字符出现的距离
            //如果该距离小于dp[i-1]（指的是i-1位置的不重复字字符串长度），意味着上一个字符出现位置是在该子字符串内的
            if(distance <= dp[i-1]){  
                dp[i] = distance //所以i位置的不重复子字符串的最长长度就是它和上一个重复字符的距离
            }else{
            //如果该距离大于dp[i-1]（指的是i-1位置的不重复字字符串长度），意味着上一个字符出现位置是在该子字符串之外的
                dp[i] = dp[i-1] + 1 //所以可以继续添加该字符
            }
            map.set(char,i) //更新索引
      
        }else{
            //该字符第一次出现
            dp[i] = dp[i-1] + 1
            map.set(char,i) //添加索引
            
        }

    }
  
  
    return Math.max(...dp)
};