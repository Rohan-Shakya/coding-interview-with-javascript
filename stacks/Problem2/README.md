# Minimum Remove to Make Valid Parentheses

Given a string s of `'('` , `')'` and lowercase English characters.

Your task is to remove the minimum number of parentheses ( `'('` or `')'`, in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

1. It is the empty string, contains only lowercase characters, or
1. It can be written as `AB` (`A` concatenated with `B`), where A and B are valid strings, or
1. It can be written as `(A)`, where `A` is a valid string.

**_Example 1:_**

```
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
```

<br />

**_Example 2:_**

```
Input: s = "a)b(c)d"
Output: "ab(c)d"
```

<br />

**_Example 3:_**

```
Input: "))(("
Output: ""
Explanation: An empty string is also valid.
```

<br />

**_Example 4:_**

```
Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"
```

<br />

## Q/A:

- What do we return from our algorithm?
  - Return a valid string with the fewest brackets removed.
- Will there be spaces in the string?
  - No, the string only contains lowercase characters, '(' and ')'.
- Is a string containing only lowercase characters valid?
  - Yes, you don't need any brackets for a string to be valid.
