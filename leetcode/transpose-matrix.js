

// transpose-matrix

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]


/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    // var matrix = [[1,2,3],[4,5,6],[7,8,9]];
var bag=[]


    for(var j=0;j<matrix.length;j++)
  {
    var arr=[]
     for(var i=0;i<matrix.length;i++)
      {
        
       arr.push(matrix[i][j])
      }
    bag.push(arr)
  }
return(bag)
};