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
  O(n)
*/

/* 
  take an array of numbers and a target sum
  check if each combination of the numbers equals the target
  return true if they do, and list the matching pair
  return false if not
*/

/*
  Add written explanation of your solution here
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
