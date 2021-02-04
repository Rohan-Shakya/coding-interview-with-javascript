# Reverse Linked List II

Given a linked list and numbers m and n, return it back with only positions m to n in reverse.

**_Example 1:_**

```
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
```

**_Example 2:_**

```
Input: 1->2->3->4->5->NULL, m = 1, n = 5
Output: 5->4->3->2->1->NULL
```

**_Example 3:_**

```
Input: 5, m = 1, n = 1
Output: 5
```

## Q/A:

- Will m and n always be within the bounds of the linked list?
  - Yes, assume 1 <= m <= n <= length of linked list.
- Can we receive m and n values for the whole linked list?
  - Yes, we can receive m = 1 and n = length of linked list.
