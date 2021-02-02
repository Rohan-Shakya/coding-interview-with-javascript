/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    Pseudo Code:

    * Define a function maxSubArray that accepts nums array
    * Initialize maxSum be lowest integer number
    * Loop through an array
        * Set sum to zero
        * Make another loop starts from 1 upto num's length
        * If pointer i + pointer j is greater than num's length then break from the loop
        * Calculate sum by adding sum + nums[i + j - 1]
        * Set maxSum to maximum value between sum and maxSum
    * Finally return maxSum
*/

const maxSubArray = (nums) => {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = 1; j <= nums.length; j++) {
      if (i + j > nums.length) break;
      sum += nums[i + j - 1];
      maxSum = Math.max(sum, maxSum);
    }
  }
  return maxSum;
};

const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(result);

/*
 * Time Complexity: 0(n^2) as there is a loop inside another loop
 * Space Complexity: 0(1) as there is only one static variable
 */
