// 4
// 1 3 5 6                                   O/p  2
// 5 



// 4
// 1 3 5 6                                    O/p  1
// 2

function Fun(arr,n,k)
{
    var l=0, h=n-1,ans=-1;

    while(l<=h)
    {
       
        var mid=l+Math.floor((h-l)/2);
        if(arr[mid]==k)
        {
            return mid;
        }
        else if(arr[mid]<k)
        {
            l=mid+1;

        }
        else{
            ans=mid;
            h=mid-1;
        }
    }
     return ans==-1?arr.length:ans
}

var n=4
var arr=[1, 3, 5, 6 ];
var k=2;

var x=Fun(arr,n,k)
console.log(x);
// Fun(arr,n,k)