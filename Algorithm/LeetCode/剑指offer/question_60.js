/**
 * @param {number} n
 * @return {number[]}
 * 空间复杂度O(N2) 需要初始化一个二维数组数组
 * 时间复杂度为O(CN2) 对二维数组里面的每一个数字都要进行一次常数级的遍历
 */
var twoSum = function(n) {

    //点数k出现的计算公式为 k出现次数/总次数
    
    let allCases = Math.pow(6,n) //总次数
  
    //我们首先要求k出现的次数

    //F[i,j] = F(i-1,j-1) +  F(i-1,j-2) +  F(i-1,j-3) +  F(i-1,j-4) +  F(i-1,j-5) +  F(i-1,j-6)
     //dp[i][j] 表示的是掷完骰子后，j点数出现的次数
    let dp = new Array(n+1)
    for (let i = 0;i<dp.length;i++){
        //初始化需要注意，即使n枚骰子不会出现大数的情况（比如1枚骰子投不出7点），但是还是要初始化他们为0，否则会出现NaN情况
        //（n*6）+1 是为了让索引从1开始
        dp[i] = new Array(n*6 + 1).fill(0) 
    }
    //先初始化1枚骰子的情况，j点（1-6）出现的次数都为1
    for(let i = 1;i<=6;i++){ //
        dp[1][i] = 1
    }


    //从2枚骰子开始,到n枚骰子的情况
    for(let i = 2;i<= n;i++){
        //j的最小值是骰子数*1，最大值是骰子数*6
        for(let j = i;j<= 6 * i; j++){
            for(let k = 1;k<=6;k++){ //模拟(j-1),(j-2)...(j-3)这个过程
                if(j - k <= 0){ //点数不能出现非正整数
                    break
                }
            //F[i,j] = F(i-1,j-1) +  F(i-1,j-2) +  F(i-1,j-3) +  F(i-1,j-4) +  F(i-1,j-5) +  F(i-1,j-6)
                dp[i][j] += dp[i-1][j-k] 
            }
        }
    }
   
   
     let res = []
    //因为投掷6个骰子出现的点数的区间位于[6,6*n]
    //对每个点k出现次数进行一次概率的计算 k出现次数/总次数。
    //所得为答案
    for(let i = n; i <= 6*n;i++){
        res.push(dp[n][i] / allCases)
    }
    
    return res
};