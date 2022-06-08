let n=123;
let num=n
let sum=0;
while(n>0)
{
    let rem=n%10;
    sum=sum*10+rem;
    n=Math.floor(n/10);
}
if(sum==num)
{
    console.log(true)
}
else{
    console.log(false)
}