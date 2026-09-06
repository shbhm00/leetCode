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


var mergeTwoLists = function (list1, list2) {
    // Create a dummy node. It helps us build the merged list
    // without having to handle the first node separately.
    const head = new ListNode();

    // Keep a pointer to the last node of the merged list.
    // We move `node` as we add elements.
    let node = head;

    while (list1 && list2) {
        if (list1.val > list2.val) {
            // Add list2's current node to the merged list,
            // then move list2 to its next node.
            node.next = list2;
            list2 = list2.next;
        } else {
            // Add list1's current node to the merged list,
            // then move list1 to its next node.
            node.next = list1;
            list1 = list1.next;
        }

        // Move node forward so it points to the last node
        // of the merged list.
        node = node.next;
    }

    // One list is now empty.
    // Attach the remaining nodes from the other list.
    node.next = list1 || list2;

    // Return head.next because `head` is the dummy node.
    return head.next;
};