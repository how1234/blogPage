var isValid = function(s) {
    let stack = []
    let dic = {')':'(',"]":"[","}":"{"}

    for (let i = 0; i<s.length;i++){
        let char = s[i]
        if(char in dic){
            if(stack[stack.length-1] === dic[char]){
                stack.pop()
            }else{
                return false
            }
        }else{
            stack.push(char)
        }
    }
    return stack.length === 0
};