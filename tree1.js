// a collection of nodes with edges
// must have a root node (node from which all other nodes are accessable)
// there is only a single unique path between two nodes

// binary tree(special type of tree) where each node has at most two children
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

//             a
//           /   \
//          b     c
//         / \     \
//       d    e     f

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Breadth first traversal (a way in which every node of a tree can be accessed, breadth refers to width of the tree. start at root node and access all nodes at the same level)
// in this tree a b c d e f is formed
// a queue can be used to implement bfs
// add root to start of queue and when it is removed from queue it is considered explored
// then take that removed node(root node ) and add its childern to the queue so now bc are on queue so remove the front of the queue again(b in this case ) and add its childern d,e to the back of queue so now done with this iteration
// now c is at the front of queue so print it and then add its childern f in this case to the back of queue
// keep doing this until queue is empty

// breadthFirstTraversal has complexity of O(n)  as every node is touched once

const breadthFirstTraversal = (root) => {
  const queue = [];
  queue.push(root);
  while (queue[0]) {
    const el = queue.shift();
    console.log(el.val);
    if (el.left) queue.push(el.left);
    if (el.right) queue.push(el.right);
  }
};

// breadthFirstTraversal(a);

module.exports = Node;

// to find levels of a tree in breath first traversal add null to queue after adding root, when you get null to head of queue that means a level end add null to end again and so on
