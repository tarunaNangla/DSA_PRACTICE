// Factorialrecursion.js
// Factorial of 5 = 5*4*3*2*1 = 120

// 5    o/p: 120
 

function f(n)
{
    if(n==0 || n==1)
    return n;
    else 
    return n*f(n-1);
    
}

console.log(f(5));