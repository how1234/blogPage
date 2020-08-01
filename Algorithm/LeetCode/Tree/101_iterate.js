/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 判断一颗二叉树是否为对称的有3种情况
 * 左右子树都为空，对称
 * 左右子树有一个为空，不对称
 * 左右子树值相等
 */
var isSymmetric = function(root) {

    let queue = []

    if(!root) return true

    queue.push(root)
    queue.push(root)
    //重点是两两对比
    while(queue.length){
        let right = queue.pop()
        let left = queue.pop()

        if(!right && !left) continue
        if(!right || !left) return false
        if(left.val != right.val) return false
        //两两加入
        queue.push(left.left)
        queue.push(right.right)

        queue.push(left.right)
        queue.push(right.left)
    }
    return true
};