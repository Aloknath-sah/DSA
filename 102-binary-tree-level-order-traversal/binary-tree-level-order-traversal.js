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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let result = []
    let queue = [root]
    while(queue.length > 0) {
        let levelSize = queue.length
        let level = []
        for(let i=0; i < levelSize; i++) {
            let deque = queue.shift()
            level.push(deque.val)
            if(deque.left) queue.push(deque.left)
            if(deque.right) queue.push(deque.right)
        }
        result.push(level)
    }
    return result
};