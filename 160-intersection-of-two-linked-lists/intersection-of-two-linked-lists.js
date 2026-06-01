/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let curr = headB
    let curr1 = headA
    let seenNodes = new Set()
    while(curr !== null) {
        seenNodes.add(curr)
        curr = curr.next
    }
    while(curr1 !== null) {
        if(seenNodes.has(curr1)) {
            return curr1
        }
        curr1 = curr1.next
    }
    return null
};