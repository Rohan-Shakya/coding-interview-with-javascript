# Valid Palindrome

Given a non-empty string `s`, you may delete at most one character. Judge whether you can make it a palindrome.

**Note:** The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

**_Example 1:_**

```
Input: "aba"
Output: true
Explanation: It is a valid palindrome.
```

**_Example 2:_**

```
Input: "abca"
Output: true
Explanation: You could delete the character 'c'.
```

**_Example 3:_**

```
Input: "abcdefdba"
Output: false
Explanation: It is not possible to become palindrome even if we remove one character from the string.
```

## Q/A:

- Do we consider a palindrome as almost a palindrome?
  - Yes, return true if the string is already a palindrome.
