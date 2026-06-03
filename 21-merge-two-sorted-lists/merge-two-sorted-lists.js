/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let sentinel = new ListNode()
    let newCopyNode = sentinel
    let newCopy = newCopyNode
    while(list1 && list2) {
        if(list1.val <= list2.val ) {
            newCopyNode.next = list1
            list1 = list1.next
            newCopyNode = newCopyNode.next
        }
        else {
            newCopyNode.next = list2
            list2 = list2.next
            newCopyNode = newCopyNode.next
        }
    }
    while(list1) {
        newCopyNode.next = list1
        list1 = list1.next
        newCopyNode = newCopyNode.next
    }
    while(list2) {
        newCopyNode.next = list2
        list2 = list2.next
        newCopyNode = newCopyNode.next
    }
    return newCopy.next
};