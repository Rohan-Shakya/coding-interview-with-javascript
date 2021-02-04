# Reverse String

Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

**_Example 1:_**

```
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
```

**_Example 2:_**

```
Input: s = "racecar", k = 7
Output: "racecar"
```

**_Example 3:_**

```
Input: s = "algorithm", k = 5
Output: "roglaithm"
```

**_Example 4:_**

```
Input: s = "a", k = 1
Output: "a"
```

## Restrictions:

1. The string consists of lower English letters only.
1. Length of the given string and k will in the range [1, 10000]
