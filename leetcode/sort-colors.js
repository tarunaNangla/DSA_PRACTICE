// sort-colors.js


// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    // var nums = [2,0,2,1,1,0]
 var arr=[]
 for(var i=0;i<nums.length;i++)
   {
     for(var j=i+1;j<nums.length;j++)
       {
         if(nums[i]>nums[j])
         {
           var temp=nums[i];
           nums[i]=nums[j];
           nums[j]=temp;
         }
       }
 arr.push(nums[i])
   }
 return(arr)
 };