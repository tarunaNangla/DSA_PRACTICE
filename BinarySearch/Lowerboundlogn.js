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

    var lower=-1

    while(l<=h)
    {
        var mid=l+Math.floor((h-1)/2);
        if(arr[mid]==k)
        {

            lower=mid;
            h=mid-1
      
        }
        else if(arr[mid]<k)
        
            l=mid+1;
        
        else
        
            h=mid-1;
       
    }
        return lower;
}

var n=5, k=2,arr=[1, 1, 2, 2, 5];
var x=B(arr,k,n);
console.log(x);