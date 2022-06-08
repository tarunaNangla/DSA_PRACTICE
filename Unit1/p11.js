
let str="carac"

var bag=""
for(var i=str.length-1;i>=0;i--)
{
    bag=bag+str[i]
}
if(bag==str)
{
    console.log(true)
}
else{
    console.log(false)
}