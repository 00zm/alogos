// print all permutations of array
// leetcode 46
// time complexity is using recursion is n!
// the height of tree is n = length of array
// at each step recursion calls are decreasing as each char becomes fixed
// e.g "ABCD" in first step first char becomes fixed i,e all the choices for first char are done
// so => "ABCD" , "BACD" , "CBAD" , "DBCA" now all the choice for first char are done
// this was done by swapping first char with itself and all the other elements
