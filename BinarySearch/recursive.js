function B(arr,l,n,k)
{
    var low=0;
    var high=n-1;

    while(l<=high)
    {
        var mid=l+Math.floor((high-l)/2);
        if(arr[mid]==k)
        {
            return mid;
        }
        else if(arr[mid]<k)
        return B(arr,mid+1,h,k)
        else
        return B(arr,mid-1,l,k)
    }
}


var arr=[1,2,3,4,5,6];
var n=arr.length;
var k=3
var l=0
var x=(B(arr,l,n,k))
console.log(x)
