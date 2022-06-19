







/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    // var n = 3;
 var bag="";
 var arr=[]
 for(var i=1;i<=n;i++)
   {
 
    
     if(i%3==0&&i%5==0)
     {
      arr.push("FizzBuzz")
     }
     else if(i%3==0)
     {
     arr.push("Fizz")
     }
     else if(i%5==0)
     {
       arr.push("Buzz")
     }
     else{
       arr.push(i.toString())
     }
   
   }
    return(arr)
 };