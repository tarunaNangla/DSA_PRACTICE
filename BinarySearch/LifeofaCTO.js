// n = 5
// arr = 0 0 0 1 1           k=1
// o/p 3


// 5
// 0 0 0 0 0                 k=1
// o/p -1




function Cto(n,arr)
{
    var low=0;
    var high=n-1;

    var k=1;
    var cto=-1;

    while(low<=high)
    {
        var mid=low+Math.floor((high-low)/2);
        if(arr[mid]==k)
        {
            cto=mid;
            high=mid-1;
        }
        else if(arr[mid]<k)
        {
            low=mid+1;
        }
        else
        {
            high=mid-1
        }
    }
    return cto;
}

var  n = 4
var arr = [0, 0, 0, 1, 1];
var x = Cto(n,arr)
console.log(x);
