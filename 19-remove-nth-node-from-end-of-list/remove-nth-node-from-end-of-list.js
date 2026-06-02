/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode()
    sentinel.next = head
    let len = 0
    while(head !== null) {
        
        head = head.next
        len++
    }
    let prev = sentinel
    let delPos = len-n
    for(let i=0; i < delPos; i++) {
        prev = prev.next
    }
    prev.next = prev.next.next
    return sentinel.next
};