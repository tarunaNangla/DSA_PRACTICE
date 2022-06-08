for(var month=1;month<=12;month++)
{
var days=31;
if(month==2)
{
days=28;
}
else if(month==4||month==6||month==8||month==10||month==12)
{
days=30;
}
for(var j=1;j<=days;j++)
{
console.log(j+"-"+month);
}
}