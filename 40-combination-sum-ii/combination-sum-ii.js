/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = []
    candidates.sort((a,b) => a-b)
    function backtrack(newTarget, path, start) {
        if(newTarget == 0) {
            result.push([...path])
        }
        if(newTarget < 0) return
        for(let i=start; i < candidates.length; i++) {
            if(i > start && candidates[i-1] == candidates[i]) continue

            path.push(candidates[i])
            backtrack(newTarget-candidates[i], path, i+1)
            path.pop()
        }
    }
    backtrack(target, [], 0)
    return result
};