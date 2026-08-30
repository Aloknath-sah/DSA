/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    let n = nums.length
    let minIndex = 0
    let minVal = Infinity
    let maxVal = -Infinity
    let maxIndex = 0
    if(n == 1) return 1
    for(let i=0; i < nums.length; i++) {
        if(nums[i] < minVal) {
            minVal = nums[i]
            minIndex = i
        }
        if(nums[i] > maxVal) {
            maxVal = nums[i]
            maxIndex = i
        }
    }
    console.log(maxIndex, minIndex)

    let left = Math.max(maxIndex, minIndex)+1
    let right = n - Math.min(maxIndex, minIndex) 
    let both = (Math.min(maxIndex, minIndex) + 1) + (n- Math.max(maxIndex, minIndex))

    return Math.min(left, right, both)
};