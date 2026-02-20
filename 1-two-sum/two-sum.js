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
        let pairToFind = target - nums[i]
        if(pairToFind in obj && obj[pairToFind] !== i) {
            return [i, obj[pairToFind]]
        }
    }
};