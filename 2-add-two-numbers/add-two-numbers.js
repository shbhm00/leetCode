/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    // Dummy node to start building the result list
    let head = new ListNode();
    let temp = head;
    let carry = 0;

    // Continue while either list has a node
    while (l1 || l2) {
        // If one list is shorter, treat its value as 0
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        // Add both values along with carry from the previous calculation
        const sum = val1 + val2 + carry;

        // Get the digit that should be stored in the current node
        const digit = sum % 10;

        // Calculate carry for the next iteration
        carry = Math.floor(sum / 10);

        // Attach the new node to the result list
        temp.next = new ListNode(digit);

        // Move temp to the newly created node
        temp = temp.next;

        // Move input lists forward if nodes are available
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // If a carry is still left, add it as the final node
    if (carry) {
        temp.next = new ListNode(carry);
    }

    // Return the actual result, skipping the dummy node
    return head.next;
};