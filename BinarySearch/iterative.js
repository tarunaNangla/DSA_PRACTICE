
function B(arr,n,k)
{
    var low=0;
    var high=n-1;

    while(low<=high)
    {
        var mid=low+Math.floor((high-low)/2);
        if(arr[mid]==k)
        {
            return mid;
        }
        else if(arr[mid]<k)
        {
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
}


var arr=[1,2,3,4,5,6];
var n=arr.length;
var k=3
var x=(B(arr,n,k))
console.log(x)
