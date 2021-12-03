/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
let a=44
const b=19
const crazyDiff=(a,b)=>{
    return a-b
}

result=crazyDiff(a, b)


result>19?console.log(Math.abs(result*3)): console.log(result)
