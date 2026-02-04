/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let k = 0
    let i=0
    let j=0
    let temp = []
   for(let k=0; k < m; k++) {
    temp[k] = nums1[k]
   }
   while(k < m && j < n) {
    if(temp[k] <= nums2[j]) {
        nums1[i++] = temp[k++]
    }
    else {
        nums1[i++] = nums2[j++]
    }
   }
   while(k < m) {
    nums1[i++] = temp[k++]
   }
   while(j < n) {
    nums1[i++] = nums2[j++]
   }
   return nums1
};