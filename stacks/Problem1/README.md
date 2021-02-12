# Valid Parentheses

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
1. Open brackets must be closed in the correct order.

**_Example 1:_**

```
Input: s = "()"
Output: true
```

<br />

**_Example 2:_**

```
Input: s = "()[]{}"
Output: true
```

<br />

**_Example 3:_**

```
Input: s = "(]"
Output: false
```

<br />

**_Example 4:_**

```
Input: s = "([)]"
Output: false
```

<br />

**_Example 5:_**

```
Input: s = "{[]}"
Output: true
```

<br />

## Q/A:

- Does an empty string count as valid?
  - Yes, return true if empty string.
