/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
  if (s.length === 0) return true;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(')');
    else if (s[i] === '{') stack.push('}');
    else if (s[i] === '[') stack.push(']');
    else if (stack.length === 0 || s[i] !== stack.pop()) return false;
  }
  if (stack.length === 0) return true;
  return false;
};

const result = isValid('{()[]}');
console.log(result);

/*
 * Time Complexity: 0(n) as we loop through each element of s
 * Space Complexity: 0(n) as stack grows for each element
 */
