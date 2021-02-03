/**
 * @param {string} s
 * @return {number}
 */

// Used Sliding window technique.
// https://medium.com/@zengruiwang/sliding-window-technique-360d840d5740

const lengthOfLongestSubstring = (s) => {
  if (s.length <= 1) return s.length;
  const seenChars = new Map();
  let left = 0,
    longest = 0;
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const prevSeenChar = seenChars.get(currentChar);
    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }
    seenChars.set(currentChar, right);
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};

const result = lengthOfLongestSubstring('abcabcbb');
console.log(result);

/*
 * Time Complexity: 0(n)
 * Space Complexity: 0(n)
 */
