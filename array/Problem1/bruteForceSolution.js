/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
    Pseudo Code:
    * Define a function findTwoSum
    * Loop through an nums array
        * Find the number to be find and store in a variable i.e numToFind =  target - nums[i]
        *  Make another loop from the number next after first loop's idx
        * Then check if the nums at idx 'j' is equal to numToFind
            * If true, return [idx i, idx j]
    * Otherwise, return empty array
*/

const findTwoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let numToFind = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === numToFind) return [i, j];
    }
  }
  return [];
};

const result = findTwoSum([2, 7, 11, 15], 9);
console.log(result);

/*
 * Time Complexity: 0(n^2) as there is two loops
 * Space Complexity: 0(1) as there is only one variable
 */
