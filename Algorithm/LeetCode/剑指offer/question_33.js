/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    //后序遍历，根节点永远在最后一位
    function helper(indexL,rootNodeIndex){
        if(indexL >= rootNodeIndex) return true //说明此层子节点小于等于1
        let counter = indexL
        
        //划分左子树
        while(postorder[counter] < postorder[rootNodeIndex]){ 
            counter++
        }
        let rightStartIndex = counter; //右子树索引开始点
        
        while(postorder[counter] > postorder[rootNodeIndex]){
            counter++
        }
        return counter === rootNodeIndex 
        && helper(indexL,rightStartIndex-1) //左子树是否合法
        && helper(rightStartIndex,rootNodeIndex-1) //右子树是否合法
        


    }
    return helper(0,postorder.length-1)
};