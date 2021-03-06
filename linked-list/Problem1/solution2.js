// LeetCode Problem:
// https://leetcode.com/problems/reverse-linked-list/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

// ---- Generate our linked list ----

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
  if (head === null || head.next === null) return head;

  let last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};

printList(reverseList(linkedList));

/*
      Time Complexity: 0(n)
      Space Complexity: 0(1)
  */
