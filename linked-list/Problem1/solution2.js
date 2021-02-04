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

//  Using recursive function:

var reverseList = function (head) {
  if (head === null || head.next === null) return head;

  let last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};

// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

/*
      Time Complexity: 0(n)
      Space Complexity: 0(1)
  */
