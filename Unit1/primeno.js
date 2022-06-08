

let n=4;
let flag=false;
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
    console.log("yes")
}
else{
    console.log("no")
}