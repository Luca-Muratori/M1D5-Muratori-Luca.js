/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/
const  exerciseStyle= function(input){
    console.log(`\n----===${input}===----`)
}

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* 
let a=11
let b=12
const area=(a,b) =>{
    return a*b
}
result=area(a, b)
console.log(result)
*/

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/*let a=1
 let b=2

 const crazySum =(a, b)=>{
     return a+b
 }
 result=crazySum(a, b)
 a===b?console.log(result*3): console.log(result)
 */

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/*
let a=44
const b=19
const crazyDiff=(a,b)=>{
    return a-b
}

result=crazyDiff(a, b)


result>19?console.log(Math.abs(result*3)): console.log(result)
*/

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* 
let n=401
const boundary= (n) =>{
    return ((Math.abs(100 - n) > 20 && (Math.abs(100 - n)<100)) ||(Math.abs(400 - n) === 400));
}
boundary(n)?console.log('true'): console.log('false')
*/

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify=function(str){
    let arrStr=str.split(' ')
    
    arrStr[0]==='Strive'?console.log(str): console.log(`Strive ${str} `)
  }
  
  strivify('Strive is magnificent')
  strivify('is Wonderfull')

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
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

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/*
const reverseString= function(phrase){
  return phrase.split('').reverse('').join('')
}
 
console.log(reverseString("Strive"));
*/

/* 
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
exerciseStyle('exercise 8')
const mySentence = "const mySentence freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
};

const word=words.join(" ");
console.log(word);

exerciseStyle('exercise 9')

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
const cutString=function (name){
    return name.slice(1,-1)
    
       
}

console.log(cutString('last character of a given string passed as a parameter'));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

exerciseStyle('exercise 10')
const giveMeRandom=function(n){
    let array=[]
    for(i=0;i<=n; i++){
        array.push(Math.floor(Math.random() * 10));
  }
  return array;
};
console.log(giveMeRandom(5));



/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/