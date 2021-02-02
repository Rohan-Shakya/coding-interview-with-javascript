/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    Solving algorithm with "Kadene's Algorithm"

    Reference: https://en.wikipedia.org/wiki/Maximum_subarray_problem
*/

/*
    Pseudo Code:

    * Define function maxSubArray that accepts nums array
    * Set MaxSum to nums[0]
    * Start loops from pointer i
        * If nums[i - 1] is greater than zero:
            * nums[i] += nums[i - 1]
        * Set maxSum = maximum value between maxSum and nums[i]
    * Finally return maxSum
*/

const maxSubArray = (nums) => {
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
    maxSum = Math.max(maxSum, nums[i]);
  }
  return maxSum;
};

const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(result);

/*
 * Time Complexity: 0(n) as there is a loop
 * Space Complexity: 0(1) as there is only one static variable
 */
