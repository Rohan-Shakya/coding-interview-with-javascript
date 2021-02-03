/**
 * @param {string} s
 * @return {number}
 */

/*
    * Pseudo Code:

    * Define function lengthOfLongestSubstring with parameter 's'
    * if length of s is less than or equal to 1, return s.length
    * Define variable longest = 0
    * Loop through a 's' string from left = 0
        * Initialize a variable seenChars = {} and currentLength = 0
        * Again loop through an 's' string starting from left
            * If seenChars[s[right]], break
            * Else Increment currentLength by 1,
                * seenChars[currentChar] = true,
                * longest = Maximum between currentLength and longest
 * Return longest
 */
const lengthOfLongestSubstring = (s) => {
  if (s.length <= 1) return s.length;
  let longest = 0;
  for (let left = 0; left < s.length; left++) {
    let seenChars = {},
      currentLength = 0;
    for (let right = left; right < s.length; right++) {
      const currentChar = s[right];
      if (!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(currentLength, longest);
      } else {
        break;
      }
    }
  }
  return longest;
};

const result = lengthOfLongestSubstring('abcabcbb');
console.log(result);

/*
 * Time Complexity: 0(n^2) as there is loop nested inside another loop
 * Space Complexity: 0(n)
 */
