/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(h)
 */

// 0=>这个结点没有被观察
// 1=>这个结点有个相机，且被观察
// 2=>这个结点的直接子树有摄像机（被观察的另一种情况）。
var minCameraCover = function(root) {
    let res = 0;
    function helper(root){
        if(!root) return 2 //空节点不需要被观察，所以直接标记为观察。
          
        let left = helper(root.left)
        let right = helper(root.right)
        if(left == 0 || right == 0){ //如果左右子树有一颗没有被观察，这里需要架一台相机
            res+=1
            return 1
        }else if(left == 1 || right == 1){ //左右子树有一个有摄像机了，意味这这个点被观察了
            return 2
        }else{
            return 0
        }
    }
    if(helper(root) == 0){ //如果根节点未被观察，需要加一台摄像机
        res+=1
    }
    return res
};