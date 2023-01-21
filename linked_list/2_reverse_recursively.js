// reverse a linked list recursilvely
// 1->2->3->4->null
// function will keep calling recursively untill it is at second last node from where it will return that node and comback to previous call so now head is 3 and returned ref is 4
// since this is new head you can return that at the end because when all recursive calls end this should be returned
// after that another thing you have to do is that you have to set the next of current head to null because when recursion ends in last call that will be new tail so its next should be null
// before destrying that old connection of head.next = null store that as that has to become the next of oldnext
function reverse(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let reverseHead = reverse(head.next);
  let oldNext = head.next;
  oldNext.next = head;
  head.next = null;
  return reverseHead;
} // head = 2 rH = 4 oN = 3
