// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

const Node = require("./tree1");

const a = new Node(5);
const b = new Node(3);
const c = new Node(6);
const d = new Node(2);
const e = new Node(4);
const f = new Node(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function findTarget(root, k) {
  let arr = treeArr(root);
  let els = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    let el = k - arr[i];
    if (el > 0 && els.has(el) && el !== arr[i]) {
      return true;
    }
  }
  return false;
  //   arr.sort((a, b) => a - b);
  //   console.log(els);
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr.length; j++) {
  //       if (j !== i) {
  //         if (arr[i] + arr[j] === k) {
  //           return true;
  //         }
  //       }
  //     }
  //   }
  //   return false;
}

//       2
//    /    \
//  3        4

function treeArr(root) {
  let arr = [];
  if (root == null) {
    return [];
  }
  arr.push(root.val);
  arr.push(...treeArr(root.left));
  arr.push(...treeArr(root.right));
  return arr;
}

console.log(findTarget(a, 9));
// optimized solutions
//1) make a hashmap as you traverse the tree for each insertion check for k-node.val
//2) make a sorted array by an in order traversal and then do a pass of array with two pointers
// 3) do a binary search of whole tree for each node for value k-node
