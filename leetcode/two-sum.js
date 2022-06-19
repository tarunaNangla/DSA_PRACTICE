// Your input
// [2,7,11,15]
// 9
// Output
// [0,1]
// Expected
// [0,1]



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var arr=[]
  for(var i=0;i<nums.length;i++)
    {
      // console.log(nums[i])
      for(var j=i+1;j<nums.length;j++)
        {
          if(nums[i]+nums[j]==target)
          {
            arr.push(i,j);
           
          }
          
        }
    }
      return(arr);
}