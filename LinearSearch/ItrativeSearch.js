
function checkData(arr,n,k)
{

    var l=0;
    var h=n-1;
    
    while(l<=h)
    {
        if(arr[l]==k)
        {
            return l;
        }
        // console.log(l);
        l++
    }
}
var arr=[2,3,4,5,6,7,99];
var n=arr.length;
var k=3
console.log(checkData(arr,n,k))