// Bobandboxes.js
// Bob the builder has a task of transferring a number of boxes, containing construction material, to a location for     construction. 
// The workers are waiting for the construction material to arrive, so it is imperative that he gets the boxes delivered on time. His crane 
// is designed in such a way, that he can only carry 1,3 or 5 boxes at a time. Wendy is worried for him, and to help him, wants to
//  find the number of ways in which the boxes can be delievered. So, she asks you for a help. Help her find out the number of ways in
//  which the boxes can be delievered.
//    7   o/p 12




function R(n)
{

     if(n==0)
     return 1
     else if(n<0)
     return 0;
     else 
     return R(n-1)+R(n-3)+R(n-5);
    //  1,3 or 5

}

console.log(R(7));