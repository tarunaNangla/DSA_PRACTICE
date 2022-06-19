

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    // var x=-121
 
  var sum=0;
 var temp=x;
 while(x>0)
   {
     var rem=x%10;
     sum=sum*10+rem;
     x=Math.floor(x/10)
   }
 
 if(sum==temp)
 {
   return(true)
 }
 else{
  return(false)
 }
 };





