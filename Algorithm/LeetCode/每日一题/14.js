/**
 * @param {string[]} strs
 * @return {string}
 * 时间复杂度O(MN)，M是数组中字符串的平均长度，N是字符串的数量
 * 空间复杂度O(1) 常数级的空间
 */
var longestCommonPrefix = function(strs) {
    let res = ''
    if(!strs.length){
        return ''
    }else{
        res = strs[0]
    }
    
    for(let i = 1;i<strs.length;i++){
        res = helper(res,strs[i])
        if(!res){
            break;
        }
    }
    return res
    
    //对两个字符串找最小公共前缀
    function helper(str1,str2){
        let len = Math.min(str1.length,str2.length)
        let index = 0;
        while(index < len && str1[index] === str2[index]){
            index++
        }
        return str1.substring(0,index)

    }
};