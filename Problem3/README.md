# Trapping Rain Water

Given an array of integers representing an elevation map where the width of each bar is 1, return how much water it can trap after raining.

**_Example 1:_**

![Diagram](https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png)

```
Input: heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
Output: 6
Output: The above elevation map (black section) is represented by array
        [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```

**_Example 2:_**

```
Input: heights = [4, 2, 0, 3, 2, 5]
Output: 9
```

**_Example 3:_**

```
Input: heights = []
Output: 0
```

**_Example 4:_**

```
Input: heights = [2, 3, 2]
Output: 0
```

## Q/A:

- Do the left and right sides of the graph as walls?
  - No, the sides are not walls.
- Will there be negative integers?
  - No, assume all integers are positive.
