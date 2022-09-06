// Santoshandprofit.js


// Santosh is a milk man, and supplies milk to local shops. Due to lockdown, the demand for milk has increased substantially but due to surge
//  in the prices of Petrol & Diesel, he has incurred some loss. Santosh is thinking of someway to maximize this profit. He is a smart man, and 
//  hence figures out, that  if he delivers  4 or 8 containers of milk, on each trip ,gives him the maximum return. Therefore,
//   he decides that he will only carry 4 or 8 containers of milk for every delivery. To find the maximum profit that he can get with this arrangement, find the number of ways in which he can deliver N containers of milk,
//  if for each visit he takes only 4 or 8 containers with him.


// 12        o/p: 3

function R(n)
{

     if(n==0)
     return 1
     else if(n<0)
     return 0;
     else 
     return R(n-4)+R(n-8);

}

console.log(R(12));