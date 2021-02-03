# Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

**_Example 1:_**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**_Example 2:_**

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**_Example 3:_**

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**_Example 4:_**

```
Input: s = ""
Output: 0
```

## Q/A:

- Is the substring contiguous?
  - Yes, look for a [substring](https://en.wikipedia.org/wiki/Substring) not a [subsequence](https://en.wikipedia.org/wiki/Subsequence).
- Does case sensitivity matter?
  - No, assume all characters in the string are lowercase.
