

// You are given a number stored in a variable with the namenum

// For all numbers in the range[1,num], including num

// 1. If the number is divisible by 3 and 5 both, print "FizzBuzz" without quotes

// 2. Else If the number is divisible by 3, print "Fizz", without quotes

// 3. Else If the number is divisible by 5, print "Buzz", without quotes

// 4. Else, print the number as it is 


// Sample Input 1 

// 3
// Sample Output 1

// 1
// 2
// Fizz

var n=3;

for(var i=1;i<=n;i++)
{
    if(i%3==0&&i%5==0)
    {
        console.log("FizzBuzz")
    }
    else if(i%3==0)
    {
        console.log("Fizz")
    }
    else if(i%5==0)
    {
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}


