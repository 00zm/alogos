// used to in problems in which range of numbers is given e.g 1 to n
// its time complexity is O(n)
// it works in place without using any extra space
// it works by placing all elements on their correct index until whole array is sorted as we know the range of elemets and their correct index
// given an array of numbers in 1 to n range sort it without using any extra space

function cyclicSort(nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      let el = nums[i];
      let cIndex = nums[i] - 1;
      [nums[cIndex], nums[i]] = [nums[i], nums[cIndex]];
    } else {
      i++;
    }
  }
  return nums;
}

let nums = [5, 4, 3, 2, 1];
console.log(cyclicSort(nums));
