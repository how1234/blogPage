/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    //任何数字和本身异或是0
    //任何数和0异或是本身
    //设求得的两个数为a,b

    let res = 0

    let aSum = 0 //包含a数字组的异或结果
    let bSum = 0 //包含b数字组的异或结果
    for(let num of nums){
        res = res ^ num
    }
    let h = 1; //b0001

    while( (res & h) === 0){
        h = h << 1 //找到异或结果（res)上第一位不为0的,因为异或结果等于1表示a与b在此位上不同
        //比如a和b在第三位不同，那么此时h的值就为b0100
    }
    console.log(res)
    console.log(h)
    for(let n of nums){ 
     
        if( (n & h) === 0){ 
            //相同的数字和h的与值一定相等，并且相同数字的异或积一定为0
            //a,b和h的与值肯定不等，因为h是他们异或值的不同位数
            //完成分组
            aSum = aSum ^ n
            //相同的数字的异或积肯定为0，所以剩下的就是单独数字和0的异或积，就是它本身。
        }else{
            bSum = bSum ^ n
        }
    }
    
    return [aSum,bSum]
    


};