// Numberofwaysproblems
// Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps at a time. You have to count, how many possible ways Sandhya can run up to the stairs.
// 4         o/p: 7


function R(n)
{

     if(n==0)
     return 1
     else if(n<0)
     return 0;
     else 
     return R(n-1)+R(n-2)+R(n-3);

}

console.log(R(4));