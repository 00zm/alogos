// https://leetcode.com/problems/binary-tree-paths/

const Node = require("./tree1");

//       3
//    /   \
//   4     9
//  / \     \
// 1   2     10

let a = new Node(3);
let b = new Node(4);
let c = new Node(9);
let d = new Node(1);
let e = new Node(2);
let f = new Node(10);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
const binaryTreePaths = function (root) {
  let paths = [];
  if (root === null) {
    return [""];
  }
  if (root.left == null && root.right == null) {
    return [`${root.val}`];
  }
  let leftResult = binaryTreePaths(root.left);
  let rightResult = binaryTreePaths(root.right);
  leftResult.forEach((el) => {
    if (el !== "") paths.push(`${root.val}->${el}`);
  });
  rightResult.forEach((el) => {
    if (el !== "") paths.push(`${root.val}->${el}`);
  });
  return paths;
};

console.log(binaryTreePaths(a));
