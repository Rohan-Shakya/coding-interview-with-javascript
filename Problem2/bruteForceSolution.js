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
    * Set maximum area equals to zero.
    * Loop through an heights array
        * Set first pointer: i
        *  Again loop through an heights array
            * Set second pointer: j
            * Calculate minimum height between two height i.e. heights[i] and heights[j]
            * Calculate width i.e. j - i
            * Calculate area i.e. height * width
            * If area is greater than maximum area:
                * Set maximum area to current area
    * Finally, return maximum area
*/

const getMaxWaterContainer = (heights) => {
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const height = Math.min(heights[i], heights[j]);
      const width = j - i;
      const area = height * width;
      if (area > maxArea) maxArea = area;
    }
  }
  return maxArea;
};

const result = getMaxWaterContainer([7, 1, 2, 3, 9]);
console.log(result);
