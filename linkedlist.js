// linked list is sequential access linear datastructure
// every element in a linked list is a seperate object called node
// each node has data and a pointer which points to the next node in the list
// linear because every element is linked after another
// data can flow in or out at any point of a linked list i.e an element can be added or removed at any position of linked list unlike a stack or a queue
// methods
// add to head,tail,middle
// remove from head,tail,middle
//
// access O(n) because sequential access data structure
// searching is O(n)
// inserting O(1) (if inserting at head or tail) O(n) if inserting at other location
// deleting O(1) or O(n)
// linked list can be used to make stacks and queue

// Doubly linked list is similar to linked list but able to traverse both forwards and backwords
// time complexities are same as linked list
// used to implement stack like functionality
const Node = {
  value: null,
  next: null,
};

class LinkedList {}
