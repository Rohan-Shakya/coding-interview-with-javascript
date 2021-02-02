/**
 * @param {number[]} heights
 * @return {number}
 */

/* 
    Given Array: heights = [7, 1, 2, 3, 9]
    Set 2 pointers: i, j

    Area:    
    General Formula = height * width
    Code Formula = min(heights[i], heights[j]) * (j - i)
*/

/*
    Pseudo Code:

    * Define a function getMaxWaterContainer
    * Initialize first pointer(i) to 0, second pointer(j) to total number of height and maximum area to zero.
    * Loop through an array until 1st pointer is less than 2nd pointer
        * Calculate minimum height between two height i.e. heights[i] and heights[j]
        * Calculate width i.e. j - i
        * Calculate area i.e. height * width
        * If area is greater than maximum area:
            * Set maximum area to current area
        * If heights[i] is less than or equals to heights[j]:
            * Increase i by 1
        * Else:
            * Decrease j by 1
    * Finally, return maximum area
*/

const getMaxWaterContainer = (heights) => {
  let i = 0,
    j = heights.length - 1,
    maxArea = 0;

  while (i < j) {
    const height = Math.min(heights[i], heights[j]);
    const width = j - i;
    const area = height * width;

    if (area > maxArea) maxArea = area;

    if (heights[i] <= heights[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};

const result = getMaxWaterContainer([7, 1, 2, 3, 9]);
console.log(result);

/*
 * Time Complexity: 0(n) as there is only one loops
 * Space Complexity: 0(1) as all variables are static and won't grow larger
 */
