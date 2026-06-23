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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let ans = true
    let validBst = (curr, lo, hi) => {
        if(!curr) return true
        if((lo !== null && curr.val <= lo) || (hi !== null && curr.val >= hi) ) {
            return false
        }
        let leftTree = validBst(curr.left, lo, curr.val)
        let rightTree = validBst(curr.right, curr.val, hi)

        return leftTree && rightTree
    }
    ans = validBst(root, null, null)
    return ans
};