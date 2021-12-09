/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number
  as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/


const check3and7= function(number){
  number%3===0&&number%7===0?console.log(`${number} is a multiple of 7 and 3`):
  number%3===0?console.log(`${number} is a multiple of 3`):
  number%7===0?console.log(`${number} is a multiple of 7`):
  console.log("Only positive number")
}
check3and7(14)
check3and7(21)
check3and7(-1)
check3and7('Molto')
