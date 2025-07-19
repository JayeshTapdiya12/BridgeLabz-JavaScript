// String methods in js

// String length
// String charAt()
// String charCodeAt() - this return UTF-16 code for the string
// String codePointAt() - it return the ascii value of the char
// String concat() - it use to add two or more string together
// String at() - The at() method is a new addition to JavaScript. It allows the use of negative indexes while charAt() do not.
// String [ ]
// String slice() - it take two parametere start and end position and create a new string
// String substring() - it take two parametere start and end position  and in this value less than zero is zero
// String substr() - it take two parametere start and end position  and the main difference is that the second parameter is  length 
// String toUpperCase() - it help to make all the char of string to upper case
// String toLowerCase() it help to maake all char to lower case
// String isWellFormed() -
// String toWellFormed() -
// String trim() - it remove white spaces form both the sides
// String trimStart() - it remove white spaces from the starting of the string
// String trimEnd() - it remove white spaces from the ending of the string
// String padStart() - it add string from the starting of the string 
// String padEnd() -  it add string from the endinfg of the string
// String repeat() - returns a string with a number of copies
// String replace()-  it replace  specify value with a specify value in the string
// String replaceAll() - it replace a specify expression with in the whole string
// String split() - the string is converted into the array


const str = "jayesh Tapdiya";

const length = str.length;
console.log(length);


console.log(str.charAt(2));

console.log(str.charCodeAt(2));

console.log(str.codePointAt(2))

console.log(str.concat("hello !!"))

console.log(str.at(2));

console.log(str.slice(2, 5));

console.log(str.substring(2, 5))

console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());


console.log(str.padEnd(5, "0"));
console.log(str.padEnd(5, "*"));


console.log(str.repeat(5));

console.log(str.replace("jayesh", "heroo"))


console.log(str.split());



