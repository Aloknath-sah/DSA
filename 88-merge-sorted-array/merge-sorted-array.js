/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   let r1 = m-1
   let r2 = n-1
   let w = m+n-1
  
   while(r2 >= 0) {
    if(r1 >=0 && nums1[r1] > nums2[r2]) {
        nums1[w] = nums1[r1--]
    }
    else {
        nums1[w] = nums2[r2--]
    }
    w--
   }
   return nums1
};