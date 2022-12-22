// https://leetcode.com/problems/sum-of-left-leaves/
//
const Node = require("./tree1");

const one = new Node(3);
const two = new Node(9);
const three = new Node(20);
const four = new Node(15);
const five = new Node(7);

one.left = two;
one.right = three;
three.left = four;
three.right = five;

function sumLeft(root) {
  if (root == null) {
    return 0;
  }

  if (root.left) {
    if (root.left.left === null) {
      if (root.left.right === null) {
        return sumLeft(root.right) + root.left.val;
      }
    }
  }
  return sumLeft(root.left) + sumLeft(root.right);
}

console.log(sumLeft(one));
