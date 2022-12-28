// given an array give the maximum sum of all subarrays of size n
// arr = [5,4,1,2,9,12,22] n=3
// find subarrys (contigious) of size 3 sum each subarray and return max-sum
// brute force with 2 arrays for(i=0;i<arr.length;i++) for(j=i;j<i+n;j++ ) sum =Max(sum)
// problem can be optimized because in each window some elements are repeated which are being computed again
//  e.g 1+2+3+4+5    when moved over substract last(1) from left  and add new from right instead of computing everything again
// problem identification
// given a string or array in question and asked about continuous subarray or substring and givn a number which will be window size  and asked max or min or subarray etc
// two types fixed sized and variable size
