/**
 * @param {number[]} heights
 * @return {number}
 */

/*
    Pseudo Code:

    * Identify pointers with lesser value
    * Is this pointer value lesser than or equals to max on that side
        * yes => update on that side
        * no => get water of the pointer value, add to total
    * Move pointer inwards
    * Repeat of other pointers
*/

const getTrappedRainWater = (heights) => {
  let left = 0,
    right = heights.length - 1,
    total = 0;
  let maxLeft = 0,
    maxRight = 0;
  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) maxLeft = heights[left];
      else total += maxLeft - heights[left];
      left++;
    } else {
      if (heights[right] >= maxRight) maxRight = heights[right];
      else total += maxRight - heights[right];
      right--;
    }
  }
  return total;
};

const result = getTrappedRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(result);

/*
 * Time Complexity: 0(n) as there is only a loop
 * Space Complexity: 0(1) as there is only static variables which doesn't scale
 */
