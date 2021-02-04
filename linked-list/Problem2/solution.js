// LeetCode Problem:
// https://leetcode.com/problems/reverse-linked-list-ii/

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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

// --------- Our solution -----------

var reverseBetween = function (head, m, n) {
  let currentPos = 1,
    currentNode = head;
  let start = head;

  while (currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null,
    tail = currentNode;

  while (currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }

  start.next = newList;
  tail.next = currentNode;

  if (m > 1) {
    return head;
  } else {
    return newList;
  }
};

printList(reverseBetween(linkedList, 2, 4));

/*
    Time Complexity: 0(n)
    Space Complexity: 0(1)
*/
