// prime no 

var n=8;
var flag=false;
for(var i=2;i<=n/2;i++)
{
    if(n%2==0)
    {
        flag=true;
        break;
    }
}

if(flag==false)
{
    console.log(true)
}
else{
    console.log(false)
}