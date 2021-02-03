/**
 * @param {string} s
 * @return {boolean}
 */

//  Helper function
const validSubPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

const validPalindrome = (s) => {
  if (s.length == 1) return true;
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        validSubPalindrome(s, left + 1, right) ||
        validSubPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

const result = validPalindrome('abcabcbb');
console.log(result);

/*
 * Time Complexity: 0(n)
 * Space Complexity: 0(1)
 */
