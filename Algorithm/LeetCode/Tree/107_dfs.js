/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 时间复杂度O(N) 遍历所有节点
 * 空间复杂度O(N) 保存一个长度为N的数组，调用过程的复杂度是O(h),所以是O(N+LogN)，等于O(N)
 */
var levelOrderBottom = function(root) {
    //dfs
    let res = []

    function dfs(node,level){
        if(!node) return
        //初始化数组
        if(!res[level]) res[level] = []
        res[level].push(node.val)

        dfs(node.left,level+1)
        dfs(node.right,level+1)
    }

    dfs(root,0)
    return res.reverse()

};