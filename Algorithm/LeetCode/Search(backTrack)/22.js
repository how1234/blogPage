/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    

    let res = []

    function helper(leftNumber,rightNumber,tempStr){

        if(leftNumber === 0 && rightNumber === 0){
            res.push(tempStr)
        }
        //产生左分支的时候，只看当前是否还有左括号可以使用；

        //产生右分支的时候，还受到左分支的限制，右边剩余可以使用的括号数量一定得在严格大于左边剩余的数量的时候，才可以产生分支
        //关键，剪枝
        if(leftNumber > rightNumber){
            return
        }

        if(leftNumber){
            helper(leftNumber-1,rightNumber,tempStr+'(')
        }
        

        if(rightNumber){
               helper(leftNumber,rightNumber-1,tempStr+')')
        }   
     
    }
    if(n===0){
        return []
    }
    helper(n,n,'')
    return res
};