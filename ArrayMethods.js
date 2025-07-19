// Array methods in js

// this are the array methods:
// Array length - to find the length of the array
// Array toString() - it convert the array element in a string seprating by the comas
// Array at() - it give the element what is present at particalur index
// Array join() - it join all the elements of the string together in a string , act like a to string but we can specify give the seprator opertor
// Array pop() - it is used to remove the last element of the array;
// Array push() - it is used to add the element from the end;
// Array shift() - it remove the first element of the array and shift all the element to the lower order index
// Array unshift() - it add a new element from the begnning of the array
// Array delete() - it delete the 1st element remove the and leaves undefined in the array
// Array concat() - it is use to join two or more array
// Array copyWithin() - copy array element to another  position in array
// Array flat() - it is used to reducing the dimention from the array
// Array slice() - it remove a piece of array from the array and creat a new array . 1st paramenter where to start and 2nd when to stop
// Array splice() - adding new element in the array 1st parameter is where to add, 2nd parameter is how much to remove
// Array toSpliced()



// Alphabetic Sort
// Array sort() -it sort the array in alphabetic
// Array reverse() - it reverse the element in the array
// Array toSorted() - it is safe way to sort the array without altering the original array
// Array toReversed() - it is safe way to reverse the array without altering the original array



// Array forEach -  it is a function call for each element in the array
// Array map() - it creates a new array by perfomring the function on them
// Array flatMap () - it 1st map all the elements in the array and then creates a new array
// Array filter() - it creates a new array when the elements test the filter test
// Array reduce() - it run on the element of the array and reduce it to a sinngle value
// Array reduceRight() -
// Array every() -  it checks whether all the elements of array pass the test
// Array Spread (...) - it help to expand the elements of array as individual array
// Array Rest (...) - it help to destrcut the array and collect the leftovers


const fruits = ["Banana", "Orange", "Apple", "Mango"];

let length = fruits.length;
console.log(length);


const string = fruits.toString();
console.log(string);

const s = fruits.at(2);
console.log(s)

const a = fruits.join('*');
console.log(a)

fruits.pop();
console.log(fruits)

fruits.push("mango");
console.log(fruits)


fruits.shift();
console.log(fruits)

fruits.unshift("lemon");
console.log(fruits);

delete fruits[0];
console.log(fruits)

const fruits2 = ["lemon", "coconut"];
const fruits3 = fruits.concat(fruits2);
console.log(fruits3)


const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat();
console.log(newArr)


fruits.splice(2, 0, "llemeon", "kiwiw");
console.log(fruits)


console.log(fruits.slice(0, 2))


fruits.sort();
console.log(fruits)

fruits.reverse();
console.log(fruits)

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});


const numbers1 = [45, 4, 9, 16, 25];
numbers1.map((ele, index) => {
    console.log(ele * 2);
});


numbers1.flatMap((x) => {
    console.log(x, x * 2)
})


const num = numbers1.filter((ele, index) => {
    return ele > 18;
})
console.log(num)


const f = numbers1.reduce((total, ele) => {
    return total + ele;
})
console.log(f)

const arr2 = [...numbers1, ...fruits];
console.log(arr2);


let j, rest;
[j, ...rest] = arr2;
console.log(j, ...rest)
