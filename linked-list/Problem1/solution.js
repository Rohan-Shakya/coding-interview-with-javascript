// LeetCode Problem:
// https://leetcode.com/problems/reverse-linked-list/

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
  let currentNode = head;
  let prev = null;
  while (currentNode) {
    let next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }
  return prev;
};

// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

/*
    Time Complexity: 0(n)
    Space Complexity: 0(1)
*/
