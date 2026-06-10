/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0
    let right = nums.length
    while(left < right) {
        let mid = left + Math.floor((right-left)/2)
        if(nums[mid] < nums[mid+1]) {
            left = mid +1
        }
        else {
            right = mid
        }
    }
    return right
};