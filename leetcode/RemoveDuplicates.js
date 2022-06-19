// RemoveDuplicates.js


function nn(nums)
  {
var bag="";
var arr=[]
for(var i=0;i<nums.length;i++)
  {
    if(nums[i]!=nums[i+1])
    {
   arr.push(nums[i]);
    }
 
  }
    return(arr)
    
  }
var nums = [0,0,1,1,1,2,2,3,3,4]
console.log(nn(nums))