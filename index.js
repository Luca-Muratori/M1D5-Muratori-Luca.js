/* EXERCISE 7
 Write a function called "reverseString" which programmatically
  reverses a given string (es.: Strive => evirtS).
*/


function reverseString(str) {
   
    var splitString = str.split("");
 
   
    var reverseArray = splitString.reverse();
 
   
    var joinArray = reverseArray.join(""); 
    
    
    console.log(joinArray)
}
 
reverseString("hello");

 




