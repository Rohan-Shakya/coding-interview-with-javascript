/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

const backSpaceCompare = function (S, T) {
  let p1 = S.length - 1,
    p2 = T.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === '#' || T[p2] === '#') {
      if (S[p1] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          backCount--;
          p1--;
          if (S[p1] === '#') {
            backCount += 2;
          }
        }
      } else if (T[p2] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          backCount--;
          p2--;
          if (T[p2] === '#') {
            backCount += 2;
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) return false;
      else {
        p1--;
        p2--;
      }
    }
  }
  return true;
};

const result = backSpaceCompare('bxj##tw', 'bxo#j##tw');
console.log(result);

/*
 * Time Complexity: 0(a + b)
 * Space Complexity: 0(1)
 */
