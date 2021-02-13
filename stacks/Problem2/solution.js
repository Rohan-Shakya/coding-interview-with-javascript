/**
 * @param {string} s
 * @return {string}
 */

const minRemoveToMakeValid = (s) => {
  const res = s.split('');
  const stack = [];
  for (let i = 0; i < res.length; i++) {
    if (res[i] === '(') {
      stack.push(i);
    } else if (res[i] === ')' && stack.length) {
      stack.pop();
    } else if (res[i] === ')') {
      res[i] = '';
    }
  }

  while (stack.length) {
    res[stack.pop()] = '';
  }
  return res.join('');
};

const result = minRemoveToMakeValid('a)b(c)d');
console.log(result);

/*
 * Time Complexity: 0(n)
 * Space Complexity: 0(n)
 */
