// Fibonaccirecursion.js
// In mathematics, the Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
//  such that each number is the sum of the two preceding ones, starting from 0 and 1. That is

// F (0) = 0 , F (1) = 1

// and
// F (n) = F (n − 1) + F (n − 2) ,


// 4          o/p :3

function f(n)
{
    if(n==0 || n==1)
    return n
    else
    return f(n-1)+f(n-2)
}


console.log(f(4));