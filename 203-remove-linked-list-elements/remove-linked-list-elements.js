/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

    // Remove matching nodes from the beginning
    while (head && head.val === val) {
        head = head.next;
    }

    // If list became empty
    if (!head) {
        return head;
    }

    let temp = head;

    // Check the next node
    while (temp && temp.next) {

        if (temp.next.val === val) {
            // Delete temp.next
            temp.next = temp.next.next;
        } else {
            // Move forward only when we don't delete
            temp = temp.next;
        }
    }

    return head;
};