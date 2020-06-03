/**
 * @param {string} s
 * @return {string}
 */
var decodeString = (s) => {
    let numStack = [] // 重复次数的栈
    let strStack = [] // 拼接字符栈
    let num = 0       // 暂时计数
    let result = ''   // 字符串的“搬运工”
    for (let char of s) {      // 向右逐字符扫描
      if (!isNaN(char)) {        // 遇到数字
        num = num * 10 + +char   // *10是为了进位，比如100
        
      } else if (char === '[') { // 遇到左括号进栈
        strStack.push(result)    // result进入strStack栈等待
        result = ''              // 完成进栈后 清零
        numStack.push(num)       // 计数器进入栈等待
        num = 0                  // 完成进栈后 清零
      } else if (char === ']') { // 出栈的时机，两个栈的栈顶出栈
        let repeatTimes = numStack.pop() // 获取拷贝次数
        result = strStack.pop() + result.repeat(repeatTimes) // 构建子串
      } else {                   // 遇到字母，追加给result串
        result += char
      }
    }
    return result 
  }
  
  