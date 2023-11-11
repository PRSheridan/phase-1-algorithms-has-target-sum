function hasTargetSum(array, target) {
  for (index in array) {
    for (let i = 0; i < array.length; i++) {
      if (array[index] + array[i] == target && index != i) {
        console.log(array[index],  array[i], array[index] + array[i]);
        return true;
      }
    }
  }
  return false;
}

/* 
  in big O notation, this solution is a quadratic formula O(n2)
  nested iteration
*/

/* 
  take an array of numbers and a target sum
  check if each combination of the numbers equals the target
  return true if they do, and list the matching pair
  return false if not
*/

/*
  iterate through the given array, for each index, check if the sum of 
  both indicies are equal to the target. Add an extra check to make sure the 
  indicies are not pointing to the same index of the array. Return true if both
  indicies are equal to the target.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
