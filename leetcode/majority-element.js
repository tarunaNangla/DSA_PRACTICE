// majority-element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    
    
    var max=0;
    var index=-1;
    for(var i=0;i<nums.length;i++)
        {
           var count=0;
            for(var j=0;j<nums.length;j++)
                {
                    if(nums[i]==nums[j])
                        {
                            count++
                        }
                }
            if(count>max)
                {
                    max=count;
                    index=i;
                }
        }
    if(max>nums.length/2)
        {
            return nums[index]
        }
    else
        {
            return -1
        }
    
};