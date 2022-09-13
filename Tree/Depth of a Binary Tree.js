// Depth of a Binary Tree Ended
// Description

// Given a binary search tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note-A leaf is a node with no children.

// This is a function complete problem, return the maximum depth after evaluating


// Input
// This is a function complete problem.There's no need to take any input.

// The input given below is for your understanding-

// The first line contains the number of nodes in the tree (t)

// Next t lines contains a node A[i]

// t <= 100

// A[i] <= 1000


// Output
// Complete the function


// Sample Input 1 

// 10
// 67
// 99
// 100
// 36
// 78
// 21
// 82
// 98
// 33
// 45
// Sample Output 1

// 5






class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
var maxDepth = function(root) {
    
   
   if(!root)
   return null

   return 1+Math.max(maxDepth(root.left),maxDepth(root.right))
};