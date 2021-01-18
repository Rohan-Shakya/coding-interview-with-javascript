# Container With Most Water

You are given an array of positive integers where each integer represents the height of a vertical line in a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold.

**_Example 1:_**

![Diagram](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)

```
Input: nums = [1,8,6,2,5,4,8,3,7]
Output: 49
Output: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
        In this case, the max area of water (blue section) the container can contain is 49.
```

**_Example 2:_**

```
Input: nums = [7, 1, 2, 3, 9]
Output: 28
```

**_Example 3:_**

```
Input: nums = []
Output: 0
```

**_Example 4:_**

```
Input: nums = [1]
Output: 0
```

**_Example 5:_**

```
Input: nums = [6, 9, 3, 4, 5, 8]
Output: 32
```

## Q/A:

- Does the thickness of the lines affect the area ?
  - No, assume they take up no space.
- Do the left and right side of the graph count as walls?
  - No, the sides cannot be used to form a container.
- Does a higher line inside our container affect our area?
  - No, lines inside a container don't affect the area.
