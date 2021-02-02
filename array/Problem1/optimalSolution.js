/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
    Solved using hash map concept

    Pseudo Code:
    * Define a hash map object
    * Loop through an nums array
        * If nums[i] at HashMap Object's value is greater or equals to zero
            * Return [nums[i] at HashMap Object's value, i]
        * If value is undefined, then
            * Find target - nums[i] value and store in variable
            *  store hashMap[numToFind] equals to i
    * Otherwise, return empty array
*/

const findTwoSum = (nums, target) => {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] >= 0) return [hashMap[nums[i]], i];
    else {
      const numToFind = target - nums[i];
      hashMap[numToFind] = i;
    }
  }
  return [];
};

const result = findTwoSum([2, 7, 11, 15], 9);
console.log(result);

/*
 * Time Complexity: 0(n) as there is only one loop
 * Space Complexity: 0(n) as there is hash-map object which stores each value of nums array
 */
