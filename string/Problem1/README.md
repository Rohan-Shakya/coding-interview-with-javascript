# Backspace String Compare

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

**_Example 1:_**

```
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
```

**_Example 2:_**

```
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
```

**_Example 3:_**

```
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
```

**_Example 4:_**

```
Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
```

## Q/A:

- What happens when two #'s appear beside each other?
  - Delete the two values before the first #.
- What happens to # when here is no character to remove?
  - It deletes nothing then, just like backspace would.
- Are two empty strings equal to each other?
  - Yes, consider two empty strings as equal.
- Does case sensitivity matter?
  - Yes, it does. "a" does not equal "A".
