# Two Sum

Give an array of integers, return the indices of the two numbers that add up to a given target.

**_Example 1:_**

```
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Output: Because nums[0] + nums[1] === 9, we return [0, 1]
```

**_Example 2:_**

```
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]
Output: Because nums[1] + nums[2] === 6, we return [1, 2]
```

**_Example 3:_**

```
Input: nums = [5, 5], target = 10
Output: [0, 1]
Output: Because nums[0] + nums[1] === 10, we return [0, 1]
```

## Q/A:

- Are all the numbers positive or there can be negatives ?
  - All numbers are positive.
- Are the duplicate numbers in the array?
  - No, there are no duplicates
- Will there always be a solution available?
  - No, there may not always be a solution.
- What do we return if there's no solution?
  - Just return empty array.([])
- Can there be multiple pairs that add up to the target?
  - No, only 1 pair of numbers will add up the target.
