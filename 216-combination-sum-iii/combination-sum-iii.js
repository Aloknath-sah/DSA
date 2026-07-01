/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = []
    function backtrack(path, start, remainingSum) {
        if(remainingSum == 0 && path.length == k) {
            result.push([...path])
        }
        if(path.length == k) return
        for(let i=start; i <= 9; i++) {
            path.push(i)
            backtrack(path, i+1, remainingSum-i)
            path.pop()
        }
    }
    backtrack([], 1, n)
    return result
};