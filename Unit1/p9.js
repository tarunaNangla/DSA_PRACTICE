for(var i=1;i<=10;i++)
 {
   var bag="";
    for(var j=1;j<=10;j++ )
      {
       if(i==1||i==10)
        {
             bag=bag+"*";
        }
        else
        {
         if(j==1||j==10)
         {
          bag=bag+"*";
        }
       else
       {
       bag=bag+" ";
       }
      }
   }
console.log(bag);
}