// depth first traversal
// you travel as deep as you can (hitting a leaf node) before going laterally or accross
//             a
//          /     \
//         b        c
//        / \         \
//       d   e         f
//  a,b,d,e,c,f
// depth first traversal can be done using a stack
//put root node on the stack now when root node is poped (it is printed i.e. being visited)
// then push its right child first and then left child to stack (this is convention it can also be done the other way around and still be depth first traversal i.e. push left then right)
// now pop next element from top of stack i.e b and print it and add its childern on stack

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// o(n) space o(n) time complexity

function depthFirstTraversal(root) {
  const stack = [root];
  while (stack.length > 0) {
    let el = stack.pop();
    console.log(el.val);
    if (el.right) stack.push(el.right);
    if (el.left) stack.push(el.left);
  }
}

// depthFirstTraversal(a);

function depthFirstRecursive(root) {
  if (root === null) {
    return;
  }
  if (root.left === null && root.right === null) {
    console.log(root.val);
    return;
  }
  if (root) {
    console.log(root.val);
  }
  if (root.right) {
    console.log(root.right.val);
    depthFirstRecursive(root.right.right);
    depthFirstRecursive(root.right.left);
  }

  if (root.left) {
    console.log(root.left.val);
    depthFirstRecursive(root.left.right);
    depthFirstRecursive(root.left.left);
  }
}

// depthFirstRecursive(a);

function depthFirstRecursiveSol(root) {
  if (root === null) return;
  console.log(root.val);
  depthFirstRecursiveSol(root.left);
  depthFirstRecursiveSol(root.right);
}
// O(n) space O(n) time one call for each node
// depthFirstRecursiveSol(a);

// flavors of a depth first trversal
// pre-order traversal
function preOrderTrav(root) {
  if (root === null) return;
  console.log(root.val);
  preOrderTrav(root.left);
  preOrderTrav(root.right);
}
// O(n) space O(n) time one call for each node
// parent printing before childern self, left, right

// post-order traversal
// left, right, self
// debfca
function postOrder(root) {
  if (root === null) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
}
// postOrder(a);
// in-order traversal
// left, self, right
// dbeacf
function inOrder(root) {
  if (root === null) return;
  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
}
inOrder(a);
