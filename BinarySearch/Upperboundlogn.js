// n,k = 5 2
// arr = 1 1 2 2 5
// o/p 2


// n,k = 5 3
// arr = 1 1 2 2 5
// o/p -1;

function B(arr,k,n)
{
    var l=0;
    var h=n-1;

   
    var ans=-1;
    

    while(l<=h)
    {
        var low=0;
        var high=n-1;
        var upper=-1;
        var ans=-1
        
        while(low<=high)
        {
            var mid=low+Math.floor((high-low)/2);
            if(arr[mid]==k)
            {
                
            //   return mid;
                 upper=mid
                 low=mid+1;
            }
              else if(arr[mid]<k)
               low=mid+1;
               else
               high=mid-1;
        }
        return upper
    
     }
}
var n=5, k=2,arr=[1, 1, 2, 2, 5];
var x=B(arr,k,n);
console.log(x);