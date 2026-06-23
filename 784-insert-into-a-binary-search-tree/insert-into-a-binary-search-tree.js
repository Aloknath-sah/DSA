/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let traversal = (curr, val) => {
        if(!curr) return new TreeNode(val)
        if(val < curr.val) {
            curr.left = traversal(curr.left, val)
        }
        else  {
            curr.right = traversal(curr.right, val)
        }
        return curr
    }
    return traversal(root, val)
};