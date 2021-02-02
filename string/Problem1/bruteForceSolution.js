/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

/*
    Pseudo Code:
    * Make buildString function that returns array of strings
    * Store buildString(S) in finalS and buildString(T) in finalT
    * If length of finalS and finalT are not equal then return false because it is sure that strings are not balanced.
    * Else loop through an array and check if both finalS[i] and finalT[i] are equal
        * If false then return false
    * Otherwise return true.
*/

const buildString = (str) => {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '#') arr.pop();
    else arr.push(str[i]);
  }
  return arr;
};

const backspaceCompare = function (S, T) {
  const finalS = buildString(S);
  const finalT = buildString(T);
  if (finalS.length !== finalT.length) return false;
  for (let i = 0; i < finalS.length; i++) {
    if (finalS[i] !== finalT[i]) return false;
  }
  return true;
};

const result = backspaceCompare('ab#c', 'ad#c');
console.log(result);

/*
 * Time Complexity: 0(a + b) as there is two functions that loops through an array / string
 * Space Complexity: 0(a + b) as there is two variable that contains array from the buildString()
 */
