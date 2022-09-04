
function checkData(arr,n,k)
{
    var l=0;
    var h=n-1;

    if(n==0)
    return 0;


    if(arr[h]==k)
    return h;

    else
    return checkData(arr,n-1,k)
}


var arr=[2,3,4,5,6,7,99];
var n=arr.length;
var k=7
console.log(checkData(arr,n,k))