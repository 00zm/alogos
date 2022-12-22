// https://leetcode.com/problems/maximum-binary-tree/
// efficient solution is using a stack
// [1,2,3]
//         3
//        / \
//      2    null
//     / \
//    1   null
const Node = require("./tree1");
const constructMaximumBinaryTree = function (nums) {
  if (nums.length === 1) {
    let node = new Node(nums[0]);
    return node;
  }
  if (nums.length < 1) {
    return null;
  }
  let maxIdx = arrayMaxIdx(nums);
  let root = new Node(nums[maxIdx]);
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIdx));
  root.right = constructMaximumBinaryTree(nums.slice(maxIdx + 1, nums.length));
  return root;
};

const arrayMaxIdx = function (arr) {
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
      max = i;
    }
  }
  return max;
};

function dFTraversal(root) {
  if (root === null) {
    return;
  }
  console.log(root.val);
  dFTraversal(root.left);
  dFTraversal(root.right);
}

let els = [1, 2, 3];
dFTraversal(constructMaximumBinaryTree(els));
