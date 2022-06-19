// running-sum-of-1d-array

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].



/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    // var nums=[1,2,3,4]
var sum=0;
var arr=[]
for(var i=0;i<nums.length;i++)
  {
    sum=sum+nums[i]
    arr.push(sum)
  }
return(arr)
};