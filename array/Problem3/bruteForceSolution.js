/**
 * @param {number[]} heights
 * @return {number}
 */

/*
    Pseudo Code:

    * Define a function getTrappedRainWater
    * Initialize total is equals to 0.
    * Loop through an heights array by initializing i to zero.
        * Define variables: left = i, rights = i, maxLeft = 0, maxRight = 0
        * Again define while loop and run until left >= 0
            * Set maxLeft = Maximum value between maxLeft and heights[left] and decrement left
        * Again define while loop and run until right < height's length
            * Set maxRight = Maximum value between maxRight and heights[right] and increment right
        * Then calculate currentHeight by calculating minimum value between maxLeft and maxRight and subtracting by heights[i]
        * If currentHeight is greater than zero then set total = total + currentHeight
    * Finally, return total
*/

const getTrappedRainWater = (heights) => {
  let total = 0;
  for (let i = 0; i < heights.length; i++) {
    let left = i,
      right = i,
      maxLeft = 0,
      maxRight = 0;
    while (left >= 0) {
      maxLeft = Math.max(maxLeft, heights[left]);
      left--;
    }
    while (right < heights.length) {
      maxRight = Math.max(maxRight, heights[right]);
      right++;
    }
    let currentHeight = Math.min(maxLeft, maxRight) - heights[i];
    if (currentHeight > 0) total += currentHeight;
  }
  return total;
};

const result = getTrappedRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(result);

/*
 * Time Complexity: 0(n^2) as there is a loop inside another loop
 * Space Complexity: 0(1) as there is only one variable i.e. total
 */
