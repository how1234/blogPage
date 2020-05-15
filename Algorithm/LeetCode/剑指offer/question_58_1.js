/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim()
    let resArr = []

    let i = s.length-1
    let j = s.length-1

    while(i >=0 ){
        while(i>=0 && s[i] != ' '){ //当遇见的字符为单词的时候
            i -= 1;
        }
        //此时i指向的是一个空格
        resArr.push(s.slice(i+1,j+1)) //截取[i+1,j+1]，也就是截取[i+1,j)
        while (s[i] === ' '){ //跳过单词间空格
            i -=1
        }
        j = i //j指向单词的末尾
    }
    return resArr.join(' ')
};