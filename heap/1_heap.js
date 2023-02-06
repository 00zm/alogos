// complete binary tree includes perfect binary tree and almost complete binary tree
// both of these are subsets of complete binary tree
// in perfect binary tree all levels are completly filled
// in almost complete binary tree leaves should be present on the last and second last level
// leaves at same level must be filled from left to right
// complete binary tree all levels till second last should be completly filled and the last level nodes should be filled from left to right
// heap data structure
// is tree based
// it is complete binary tree(filled all levels till second last level last level filled from left to right)
// types min heap(keep track of minimum value at root) and max heap (max value at root)
// max heap is a complete binary tree in which root node is maximum and same is true for all subtrees (the value at root should be the max value in entire tree)
// implementation
// a tree can be build from array if i is root node then 2i+1 is left node and 2i+2 is right node
// if index of child is i then index of parent  will be ceil(i/2)-1
// in perfect binary tree the node on level h are 2^h and total nodes are 2^h+1 - 1
// where h starts from 0
// in perfect binary tree no of internal nodes leave nodes-1
// to represent a heap in the form of array the size of array should be 2^h+1 - 1 as in the worst case the heap can be completly full at all levels
// height of tree will be floor(log2(n)) n no of nodes
// log base is 2 because tree is binary
// range of leaves in complete binary tree floor(n/2)+1 to n (1-based index)
// range of internal nodes will be 1 to floor(N / 2) (1 based index)
// if elements are in a descending order in an array then it will be maxheap
// if elmentts are in an increasing order in an array and you represent it into a heap then it will be min heap

// heapify (rearrange so that the tree becomes a max/min heap)
// in max heap take the root that is not is heap form and replace it with the max of left and right child
// stoping condition is if you have reached leaf node then it is in heap form as it is only a single node
// or the node is grater than  left and right child then it is in its correct position
// no of operations is equal to height of tree * (2 comparsion operations)
// no of recursive calls will be log(n)(which is no of levels) , space complexity will be logn
// the process of rearranging a heap by comparing each parent with its children recursively is called heapify
// we are heapifing the ith index when left and right subtree  are  in heap form

// Build heap
// range of all leaf nodes is n/2 - 1 to n-1
// leaf nodes are already in heap so heapify internal nodes
// since to apply heapify alogo left and right subtree should be in heap form so start from node that are close to leave node as leave nodes are already in heap form (bottom up)
// start from last internal node
// so apply heapify to all internal nodes starting from floor(n/2)-1 to 0
// time complexity will be O(n)
// no of nodes at each level is n/2^h+1
// so h * (n/2^h+1) work done
// after simplification becomes O(n)
// time complexity to build heap is O(n) and space is O(logn)

// Extract max
// save max element which will be root
// copy last element to root (last bottom right leave node)
// decrease size (remove last ) as last has been copied to root
// now max heapify the root element

// Increase Key
// on increasing a node value in a max heap node may move up to maintain max-heap property
// steps
// update value
// percolate up till i)parent > curr node ii) curr node becomes root of the tree
// psudo code
// i index of node changed A = heap array
// while(i>0 && A(i/2)<A[i]){
// swap(A(i),A(i/2))
// i=i/2
//}

// Decrease key algorithm
// on decreasing the value node may move down to maintain max heap property
// steps
// change value
// max heapify curr node (pervolate down)
// psudo code
// A[i] = key
// Max_heapify(A,i)
// time and space o(logn)

// insert element
// in a complete binary tree insert elements at last level from left to right
// steps
// insert node at last level (from left to right)
// percolate up till current node is root node or parent is > curr node (same as increase key)
// time O(logn) space O(1)

// operations
// find max O(1)
// Delte max O(logn)
// insert o(logn)
// increase key o(logn)
// decrease key o(logn)
// find min o(N) as it is max heap
// search random element O(n)
// delete random element O(n)

// heap push
// insert element at available space (it is filled from top to bottom and left to right)
// apply perculate up algorithm
//time log(n) space o(1)

// heap pop
// remove root element
// copy last element to root
// max-heapify root element or perculate down
// time o(n) space o(n) if used recursion
