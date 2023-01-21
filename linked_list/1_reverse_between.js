// reverse the linked list nodes from left tills right
// https://leetcode.com/problems/reverse-linked-list-ii/description/
var reverseBetween = function (head, left, right) {
  let nodeBefore = null;
  let nodeAfter = null;
  if (left == right) {
    return head;
  }
  let s = head;
  let count = 1;
  while (count < right) {
    if (count + 1 == left) {
      nodeBefore = s;
    }
    s = s.next;
    count++;
  }
  nodeAfter = s.next;
  s.next = null;
  let nodetoreverse;
  if (nodeBefore != null) {
    nodetoreverse = nodeBefore.next;
  } else {
    nodetoreverse = head;
  }
  let reversedHead = reverse(nodetoreverse);
  if (nodeBefore == null && nodeAfter == null) {
    return reversedHead;
  } else if (nodeBefore == null && nodeAfter != null) {
    nodetoreverse.next = nodeAfter;
    return reversedHead;
  } else if (nodeBefore != null && nodeAfter == null) {
    nodeBefore.next = reversedHead;
    return head;
  } else {
    nodeBefore.next = reversedHead;
    nodetoreverse.next = nodeAfter;
    return head;
  }
};

// function for  inplace reversal
function reverse(head) {
  let prev = null;
  let curr = head;
  let next = curr.next;
  while (curr != null) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = next?.next;
  }
  return prev;
}
