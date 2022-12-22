// https://leetcode.com/problems/symmetric-tree/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(1);
const rootL = new Node(2);
const rootR = new Node(2);
const ltwoL = new Node(3);
const ltwoR = new Node(4);
const rtwoL = new Node(4);
const rtwoR = new Node(3);

root.left = rootL;
root.right = rootR;
rootL.left = ltwoL;
rootL.right = ltwoR;
rootR.left = rtwoL;
rootR.right = rtwoR;
//                               1
//                           2        2
//                        3     4   4    3
//                   7      8  9 10  8 7  10 9
// [1] [2 2]* [2 3 4] [3 4 4 3]* [4 4 3 7 8] [ 4 3 7 8 9 10] [3 7 8 9 10 8 7] [7 8 9 10 8 7 10 9]*
// [1] [2,2] [2,3,4] [3,4,4,3]
// 1 2 2 3 4 4 3

function isSymetric(root) {}

console.log(isSymetric(root));
