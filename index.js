 //EXERCISE 4
 //Write a function called "boundary" which accept an integer parameter n and returns true if n is within
 // 20 and 100 (included) or if n it's equal to 400.




let n=1
const boundary= (n) =>{
    return ((Math.abs(100 - n) <= 20) ||(Math.abs(400 - n) === 400));
}
boundary(n)?console.log('true'): console.log('false')
