const Node = require("./tree1");

const a = new Node(3);
const b = new Node(9);
const c = new Node(20);
const d = new Node(15);
const e = new Node(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

var averageOfLevels = function (root) {
  let que = [];
  let sum = 0;
  let count = 0;
  let ans = [];
  if (root) {
    que.push(root);
    que.push(null);
    while (que.length >= 1) {
      console.log(que);
      let el = que.shift();
      if (el == null) {
        let avg = sum / count;
        ans.push(avg);
        sum = 0;
        count = 0;
        if (que.length === 0) {
          break;
        }
        que.push(null);
      } else {
        sum += el.val;
        count++;
        if (el.left) {
          que.push(el.left);
        }
        if (el.right) {
          que.push(el.right);
        }
      }
    }
    return ans;
  }
};

console.log(averageOfLevels(a));
