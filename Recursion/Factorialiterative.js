// Factorialiterative.js



function f(n)
{
    var fact=1;
    for(let i=2;i<=n;i++)
    {
        fact=fact*i;
    }
    return fact;
}

var n=5;
console.log(f(n));
