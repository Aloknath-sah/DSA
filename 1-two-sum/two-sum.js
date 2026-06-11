/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {}
    for(let i=0; i < nums.length; i++) {
        obj[nums[i]] = i
    }
    for(let i=0; i < nums.length; i++) {
        let diff = target - nums[i]
        if(obj[diff] && obj[diff] !== i) {
            return [i, obj[diff]]
        }
    }
};