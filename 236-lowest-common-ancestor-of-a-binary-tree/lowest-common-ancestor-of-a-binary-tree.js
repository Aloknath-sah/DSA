/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let lca = null
    
    let traversal = (curr) => {
        let count = 0
        if(!curr) return 0
        let leftNodeCount = traversal(curr.left)
        let rightNodeCount = traversal(curr.right)
        if(curr.val == p.val || curr.val == q.val) {
            count++
        }
        count = leftNodeCount+rightNodeCount+count
        if(count == 2 && !lca) {
            lca = curr
        }
        return count
    }
    traversal(root)
    return lca
};