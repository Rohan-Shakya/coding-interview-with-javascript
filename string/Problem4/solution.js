/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const reverseStr = function (s, k) {
  let result = '';
  for (let i = 0; i < s.length; i = i + k * 2) {
    for (let j = 0; j < k; j++) {
      if (s[i + k - j - 1]) result += s[i + k - j - 1];
    }
    result += s.substring(i + k, i + k * 2);
  }
  return result;
};

const result = reverseStr('abcdefg', 2);
console.log(result);

/*
    Time Complexity: 0(n * k) as there is outer loop that iterates over array of length N,
                    the inner loop iterates over array of length M
    Space Complexity: 0(n) as there is one string variable that have linear space
*/
