// tree store data hieararchely instead of linearly (definitve start and end)
// a tree an abstract data structure which contains a series of linked nodes connected together to form a hieararchical representation of information
// like a linked list where each node has option of pointing towards multiple nodes
// vertice is a node in a tree
// edge is a connection between node
// root node is top most node
// child node a certain node which has an edge connecting it to another node one level above itself
// leaf node a node in a tree which does not have any child node
// height is property of tree (number of edges on the longest possible path down to a leaf)
// depth is property of a node (number of edges required to get from that node to root node)

// binary search tree is a simple tree with restrictions to help store data
// a node can have at most 2 children
// for any parent node the child to the left has value less than or equal to itself the child to the right has value greater or equal to itself
// no two nodes contain same value
// big advantage of binary search trees we can search through them in logarithmic time

// tree uses
// storing hierarchical data

// tries is another tree with restrictions
// a trie is a tree like datastructure whose node store letters of alphabet in the form of characters
// trie can be constructed to get strings of words
// we use tries to retrive words extremly fast
// uses include autocomplete

// a heap is a special tree where all parent nodes compare to their children node in some specific way be being more or less extreme
// either greater than or less than
// determine where the data is stored
// usually dependent on parent node value
// min-heap and max-heap
// for min-heap value of root node must be minimum amongst all its childern
// this fact must be same recursively for all parent nodes contained within the heap
// max heap is the opposite
// these properties make it easy to insert into heap and remove from it
// heaps are used for heap sort implementation in step 1 a min or max heap is formed then root node is continuosly removed to form sorted list
// priority queue also use heap

// graphs consist of pieces of information and the paths that run between them
// a non linear data structure consisting of nodes and edges
// graphs dont have a specified starting point
// multiple starting points multiple branches
// notation of graphs
// {1,2,3,4,} all vertices
// {(1,2),(1,4),(2,3),(3,1),(4,1)} edge set
// an undirected graph is in which direction in which you traverse the nodes is not important. usually indicated by lack of arrows
// a cyclic graph is one which contains a path from at least one node back to itself
// all undirected graphs are cyclic
// an acyclic graph is one which contains no path from any one node which leads back in on itself (directed graphs are acyclic)
// weighted graphs have a numerical value with each edge (cost). each weight represents some property of the information you are trying to convey

// follower system of social media websites uses unweighted cyclical graphs
// undirected cyclical heaps with weighted edges can be used through dijkstra's shortest path algoritm (google maps ,ip routing)
