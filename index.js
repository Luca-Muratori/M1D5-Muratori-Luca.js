//Write a function called "crazySum" which receives two integers as parameters.
 //It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.

 let a=1
 let b=2

 const crazySum =(a, b)=>{
     return a+b
 }
 result=crazySum(a, b)
 a===b?console.log(result*3): console.log(result)