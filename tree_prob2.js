// https://leetcode.com/problems/balanced-binary-tree/
const Node = require("./tree1");

function isBalanced(root) {
  if (root === null) {
    return true;
  }
  let leftHeight = calcHeight(root.left);
  let rightHeight = calcHeight(root.right);
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
}

function calcHeight(root) {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(calcHeight(root.left), calcHeight(root.right));
}

const a = new Node(3);
const b = new Node(9);
const c = new Node(20);
const d = new Node(15);
const e = new Node(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

console.log(isBalanced(a));
