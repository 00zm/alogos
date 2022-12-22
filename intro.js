// Big o notation is used to measure the efficiency of datastructures
// most common functions of a datastructure are accessing an element
// searching element, inserting and deleting an element

// Big o notation gives the function of (number of operations) given the size of dataset n

// 1- An array is a list of similar of values grouped togather.
// an array has a type size and a name
// parallel array are arrays of same size that have related data
// an array size cannot be changed once initialized
// an array with an array at every index is called a two dimensional

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(arr[0][1]);

// array access time is O(1) is constant time
// this is because at the time of initilizing the size of array is known and starting memory location is known so the position of required element can easily be computed
// array search time is O(n) as most arrays are not sorted
// inserting and deleting both have O(n) complexity for arrays
// inserting worst case is when you have to shift elements to insert an element at a desired index
// similarly for deleting you have to move elements

// Array List
// an array list is a growing array as its size is dynamic unlike an array
// access O(1)
// arraylists cannot store primitives they store only the objects
// arraylist unlike arrayss stores reference to variables instead of actual variables
// search O(n), inserting O(n) , deleting O(n)

// Array and arraylist are random access data structures
//
// Sequential data structures
// Stack is Last In First Out
// must have push and pop methods, sometimes has peek and contains methods as well
// stack access complexity is O(n), search is also O(n), inserting O(1) deleting O(1)
// stack is used to keep track of active functions or subroutines in recursion
// other examples of stacks are undo/redo button, back paging on web browsers
//
// Queue
// Queue is a sequential access data structure that follows fifo principle i.e. first in first out
// first one to be added will also be the first one to be removed
// elements are added to the back i.e. tail and removed from front i.e. head
// methods: enQueue add elements to tail of queue
// deQueue :remove element from head of queue
// peek : returns element on the front without removing it.
// contains: returns a boolean based on whether an element exists in queue or not
// accessing element O(n) e.g you need the element on tail you will have to dequeue all the elements before you get to the last
// searching O(n)
// inserting O(1)
// deleting O(1) because we are enQueue and deQueue at a single point
// queue are used for job scheduling
