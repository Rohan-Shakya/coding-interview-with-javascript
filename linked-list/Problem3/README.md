# Flatten a Multilevel Doubly Linked List

You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

**_Example 1:_**

```
Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation:

The multilevel linked list in the input is as follows:

```

![Image](https://assets.leetcode.com/uploads/2018/10/12/multilevellinkedlist.png)

```
After flattening the multilevel linked list it becomes:
```

![Image2](https://assets.leetcode.com/uploads/2018/10/12/multilevellinkedlistflattened.png)

<br />

**_Example 2:_**

```
Input: head = [1,2,null,3]
Output: [1,3,2]
Explanation:

The input multilevel linked list is as follows:

  1---2---NULL
  |
  3---NULL
```

**_Example 3:_**

```
Input: head = []
Output: []
```

## Q/A:

- Can a doubly linked list have multiple child list nodes?
  - Yes, every list node can have multiple levels of children.
- What do we do with child properties after flattening?
  - Just set the child property value to null.
